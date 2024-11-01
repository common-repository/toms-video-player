<?php
/**
 * Plugin Name:       TomS Video Player
 * Description:       Simply protect your videos from being downloaded 'Directly'.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           2.1.8
 * Author:            Tom Sneddon
 * Author URI:        https://toms-caprice.org
 * License:           GPLv3 or later
 * License URI:       http://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain:       toms-video-player
 * Domain Path:		  /languages
 */

if( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

class TomSVideoPlayer{
    function __construct() {
        add_action( 'init', array($this, 'TSVPAdminAssets'));
        // 添加 TomS Blocks 分类到 Gutenberg
        $filter = version_compare( get_bloginfo( 'version' ), '5.8', '>=' ) ? 'block_categories_all' : 'block_categories';

        add_action( 'enqueue_block_editor_assets', array($this, 'TomSFullSiteEditorSupport'));
        add_filter( $filter, array($this, 'TomSBlocksCategory'), 10, 2 );
    }
    function TomSBlocksCategory($block_categories, $editor_context){
        $checkTomSBlocks = wp_list_pluck( $block_categories, 'slug');
        
        if ( version_compare( get_bloginfo( 'version' ), '5.8', '>=' ) && in_array('tomsneddon', $checkTomSBlocks, true) === false ) {
            array_push(
                $block_categories,
                $TomSBlocks = array(
                    'slug'  => 'tomsneddon',
                    'title' => esc_html__( 'TomS Blocks', 'toms-video-player' ),
                    'icon'  => 'wordpress'
                )
            );
        }elseif(in_array('tomsneddon', $checkTomSBlocks, true) === false){
            array_merge(
                $block_categories,
                [
                        [
                            'slug'  => 'tomsneddon',
                            'title' => esc_html__( 'TomS Blocks', 'toms-video-player' ),
                            'icon'  => 'wordpress'
                        ],
                ]
            );
        }

        return $block_categories;
    }

    function TSVPAdminAssets() {

        load_plugin_textdomain( 'toms-video-player', false, dirname(plugin_basename( __FILE__ )) . '/languages' );

        wp_register_script( 'tomsvideoplayerjs', plugin_dir_url( __FILE__ ) . 'build/index.js', array('wp-blocks', 'wp-element','wp-editor', 'wp-i18n', 'wp-components'));
        wp_register_style( 'tomsvideoplayerstyle', plugin_dir_url( __FILE__ ) . 'build/index.css');

        wp_set_script_translations( 'tomsvideoplayerjs', 'toms-video-player', plugin_dir_path( __FILE__ ) . '/languages' );

        register_block_type( 'tomsneddon-video-player/toms-video-player', array(
            'editor_script' => 'tomsvideoplayerjs',
            'editor_style' => 'tomsvideoplayerstyle',
            'render_callback' => array($this, 'TomSVideoPlayerFrontendHTML')
        ) );
    }
    function TomSFullSiteEditorSupport(){
        //add js args to Full site editor
        wp_add_inline_script( 'tomsvideoplayerjs', 'var FromPHP = ' . json_encode( array(
            'defaultLogo' => plugin_dir_url( __FILE__ ) . 'assets/img/TomS-68.png',
            'defaultImgUrl' => plugin_dir_url( __FILE__ ) . 'assets/img/toms-video-player.png',
        ) ), 'before' );
    }

    function TomSVideoPlayerFrontendHTML($attributes){
        if ( is_admin() && has_block('tomsneddon-video-player/toms-video-player') ) {
            //add something to js
            wp_add_inline_script( 'tomsvideoplayerjs', 'var FromPHP = ' . json_encode( array(
                'defaultLogo' => plugin_dir_url( __FILE__ ) . 'assets/img/TomS-68.png',
                'defaultImgUrl' => plugin_dir_url( __FILE__ ) . 'assets/img/toms-video-player.png',
            ) ), 'before' );
        }

        $html = '';
        $videoBlock                 = isset($attributes['videoBlock']) ? $attributes['videoBlock'] : true;
        $videoAlignment             = isset($attributes['videoAlignment']) ? $attributes['videoAlignment'] : 'left';
        $controls                   = isset($attributes['controls']) ? $attributes['controls'] : true;
        $disablePictureInPicture    = isset($attributes['disablePictureInPicture']) ? $attributes['disablePictureInPicture'] : true;
        $disableSaveVideoAs         = isset($attributes['disableSaveVideoAs']) ? $attributes['disableSaveVideoAs'] : true;
        $autoPictureInPicture       = isset($attributes['autoPictureInPicture']) ? $attributes['autoPictureInPicture'] : false;
        $autoPlay                   = isset($attributes['autoPlay']) ? $attributes['autoPlay'] : false;
        $loop                       = isset($attributes['loop']) ? $attributes['loop'] : false;
        $muted                      = isset($attributes['muted']) ? $attributes['muted'] : false;
        $playsInline                = isset($attributes['playsInline']) ? $attributes['playsInline'] : false;
        $noDownload                 = isset($attributes['noDownload']) ? $attributes['noDownload'] : true;
        $noFullscreen               = isset($attributes['noFullscreen']) ? $attributes['noFullscreen'] : false;
        $noRemotePlayback           = isset($attributes['noRemotePlayback']) ? $attributes['noRemotePlayback'] : false;
        $preload                    = !empty($attributes['preload']) ? $attributes['preload'] : 'metadata';
        $posterImg                  = !empty($attributes['posterImg']) ? $attributes['posterImg'] : '';
        
        $videoSource                = !empty($attributes['videoSource']) ? $attributes['videoSource'] : '';
        $videoType                  = !empty($attributes['videoType']) ? $attributes['videoType'] : '';
        $videoWidth                 = !empty($attributes['videoWidth']) ? $attributes['videoWidth'] : '';
        $videoHeight                = !empty($attributes['videoHeight']) ? $attributes['videoHeight'] : '';
        $posterLock                 = isset($attributes['posterLock']) ? $attributes['posterLock'] : true;
        $sourceLock                 = isset($attributes['sourceLock']) ? $attributes['sourceLock'] : false;
        $source                     = !empty($attributes['source']) ? $attributes['source'] : '';
        $mimeType                   = !empty($attributes['mimeType']) ? $attributes['mimeType'] : '';
        $disabledResponsiveSize     = isset($attributes['disabledResponsiveSize']) ? $attributes['disabledResponsiveSize'] : false;
        $videoSize                  = isset($attributes['videoSize']) ? $attributes['videoSize'] : false;

        if($noDownload === false){
            $noDownload = '';
        }else{
            $noDownload = 'nodownload';
        }
        if($noFullscreen === true){
            $noFullscreen = 'nofullscreen';
        }else{
            $noFullscreen = '';
        }
        if($noRemotePlayback === true){
            $noRemotePlayback = 'noremoteplayback';
        }else{
            $noRemotePlayback = '';
        }
        if($preload === 'metadata'){
            $preloads = 'metadata';
        }else{
            $preloads = $preload;
        }

        ob_start(); ?>
            <div class="tomsneddon">
                <?php if($videoBlock === true) {  
                    if( !empty($videoSource ) || !empty( $posterImg ) || ( $sourceLock === true && !empty($source) ) ) { ?>
                <div class="toms-video-player" style='text-align: <?php if(!empty($videoAlignment)) { echo esc_attr( $videoAlignment ); }else{echo 'left'; } ?>' <?php if($disableSaveVideoAs !== false){ echo ' oncontextmenu="return false"'; } ?> >
                    <?php /* <pre><?php echo wp_json_encode($attributes); ?></pre> */ ?>
                        <video <?php 
                                    if($controls !== false){
                                        echo ' controls';
                                    }
                                    if($disablePictureInPicture !== false){
                                        echo ' disablePictureInPicture="true"';
                                    }
                                    if($autoPictureInPicture === true){
                                        echo ' autoPictureInPicture="true"';
                                    }
                                    if($autoPlay === true){
                                        echo ' autoPlay';
                                    }
                                    if($loop === true){
                                        echo ' loop';
                                    }
                                    if($muted === true){
                                        echo ' muted="true"';
                                    }
                                    if($playsInline === true){
                                        echo ' playsInline';
                                    }
                                    if(!empty( $noDownload ) || !empty( $noFullscreen ) || !empty( $noRemotePlayback )){
                                        echo ' controlsList="' . esc_attr( $noDownload ).' '. esc_attr( $noFullscreen ) .' '. esc_attr( $noRemotePlayback ) . '"';
                                    }
                                    echo ' preload="' . esc_attr( $preloads ) . '"';
                                    if($posterLock != false && !empty($posterImg)){
                                        echo ' poster="' . esc_url( $posterImg ) . '"';
                                    }
                                    if($videoSize === true){
                                        if(!empty($videoWidth)){
                                            echo ' width="' . esc_attr( intval( $videoWidth ) ) . '"';
                                        }
                                        if(!empty($videoHeight)){
                                            echo ' height="' . esc_attr( intval( $videoHeight ) ) . '"';
                                        }
                                    }
                                    if($disabledResponsiveSize !== true){
                                        echo ' style="max-width: 100%; height: auto;"';
                                    }
                                ?>
                        >
                            <?php  if(!empty($videoSource)) :  /* Video Source URL */ ?>
                                    <source src="<?php echo esc_url( $videoSource ); ?>" <?php if(!empty($videoType)){ echo ' type="' . esc_attr( $videoType ) . '"'; } ?> />     
                            <?php endif; ?>
                            
                            <?php // Extra Source URL 
                                if( $sourceLock === true && !empty($source) ){
                                    foreach ($source as $key => $url ){ 
                                        if( !empty($url) ){?>
                                            <source src="<?php echo esc_url( $url ); ?>" <?php if(!empty($mimeType[$key])){ echo ' type="' . esc_attr( $mimeType[$key] ) . '"';} ?> />
                                    <?php } }
                                }
                            ?>
                            <p><?php esc_html( _e("Your browser doesn't support HTML5 video.", "toms-video-player") ); ?></p>
                        </video>
                </div> 
                <?php }else{ ?>
                    <img src="<?php echo esc_url(plugin_dir_url( __FILE__ ) . 'assets/img/default.png'); ?>" style="width: 100%; height: auto;">
                <?php } } ?>
            </div>
       <?php /* return ob_get_clean();*/
       $html = ob_get_contents();
       ob_end_clean();

       return $html ;
    }
}

$TomSVideoPlayer = new TomSVideoPlayer();