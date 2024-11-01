=== TomS Video Player ===
Contributors: Tom Sneddon
Tags: video block, block, player block, video from url block, wordpress video player block, protect video, no download, poster image, video link, save video as, remove download button, video player, video block
Requires at least: 5.8
Requires PHP: 7.4
Tested up to: 6.1
Stable tag: 2.1.8
Author URI: https://toms-caprice.org
Donate link: https://toms-caprice.org/donate
License: GPLv3 or later
License URI: http://www.gnu.org/licenses/gpl-3.0.html

Simply protect your videos from being downloaded 'Directly'.

== Description ==

<a href="https://toms-caprice.org">**TomS Video Player**</a> is a Simple HTML5 video player. Simply protect your videos from being downloaded **'Directly'**. Absolutely **light weight** and easy to use even without explanation. This is a video block and all settings inside the block, means that this plugin only work on gutenberg editor(the wordpress core block editor), 
if your theme support the block editor, you can add our block any where you want. No support the shortcode. Of course, you don’t need to upload video files to the wordpress media library. You can paste video url directly .You can store your video files on a CDN server to reduce the burden on the wordpress server.


== Features ==
You can easily to add or remove the attrubutes of the HTML5 video from the &lt;video&gt; element via our block settings.

#### Video Settings:
* 🎞️ **Video Block** – Temporarily disable Video Block.
* 🪧 **Poster Image** – add poster="" to the &lt;video&gt; elememt.

### Option Settings:
* 🎛️ **Playback Controls** – add controls to the &lt;video&gt; elememt.
* 🪞 **Disabled Picture in picture** – add disablepictureinpicture="true" to the &lt;video&gt; elememt.
* 🖱️ **Disabled Save video as...** – if enabled, the video screen can't right click. other areas do not affect, default is enabled.
* 🪞 **Auto Picture in picture** – add autopictureinpicture="true" to the &lt;video&gt; elememt.
* 🎥 **AutoPlay** – add autoplay to the &lt;video&gt; elememt.
* 📹 **Loop** – add loop to the &lt;video&gt; elememt.
* 🔇 **Muted** – add muted="true" to the &lt;video&gt; elememt.
* 📽️ **Plays Inline** – add playsinline to the &lt;video&gt; elememt.
* 📐 **Disabled Responsive Video Size** – if enabled, will remove the responsive css from the &lt;video&gt; elememt.
* 📏 **Set video size manually** – if enabled, will show the Width and Height input field under the video url input field, you can set the video player size manually, but not responsive. this will add [width=""] and [height=""] to the &lt;video&gt; elememt.
* ⛔ **No Dowload** – add controlsList="nodownload" to the &lt;video&gt; elememt.
* ⛔ **No Fullscreen** – add controlsList="nofullsrceen" to the &lt;video&gt; elememt.
* ⛔ **No Remote Playback** – add controlsList="noremoteplayback" to the &lt;video&gt; elememt.
* ⏳ **Preload** – add preload="" to the &lt;video&gt; elememt.  It may have one of the following values: "auto", "metadata", "none". Default: metadata.

<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video" target=_blank>**Here**</a> is the details of the &lt;video&gt; elememt's attributes.

* 🌎 **Translation ready**

== Frequently Asked Questions ==

= Can this video player completely prevent users from downloading my videos? =

No! No one can stop the user to download your video if they can watch your video on your website. This plugin just prevent users from downloading your video via "Save video as"， and hide the download button provided by HTML5 Video.

= Is this plugin lightweight ? =

Yes! Absolutely lightweight! This plugin only output a few lines of the necessary code, no .css and .js files load to the frontend.

= Why the AutoPlay not work ? =

The autoplay may cause usability issues for some users. Enabled the Autoplay and the Muted options may be work. if you want to know more about this,<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video#attr-autoplay">see here.</a>

= Why my video can't play in the Opera Browser ? =

Are your video file is mp4? The Opera browser does not supported the mp4 format by default. You can try other video format like ".webm" .

= Why the Disable Picture In Picture attribute in the Firefox Browser not work ? =

This is the Firefox browser to control it and let the user to manage this option, not the website.

= This plugin support shortcode ? =

No, this is a block of gutenberg.

== Changelog ==

The <a href="https://toms-caprice.org/changelog">TomS Video Player</a> is the best place to learn in more detail about any important changes.

= 2.1.8 - 26/Oct/2022 =

* Tweak: WordPress 6.0.3 compatibility
* Tweak: WordPress 6.1 compatibility
* Tweak: WordPress full site editor compatibility
* Tweak: update new brand logo. 

= 2.1.7 - 04/Mar/2022 =

* Tweak: WordPress 5.9.1 compatibility
* Fixed: Preview error of TomS Block menu items. 

= 2.1.6 - 02/Jan/2022 =

* TWEAK: update the Screenshots
* TWEAK: Tested up to: 5.8.2

= 2.1.5 - 15/Oct/2021 =

* Feature : Add TomS Extra Source Add-on support.
* TWEAK: Arrange again, move the url input field to the block main area.
* TWEAK: Show the url input field, Only the Block state is selected.
* TWEAK: Change the Block alignment default value 'left' to 'none';
* The layout follows Wordpress block layout standard.

= 2.0.4 - 09/Oct/2021 =

* change the block namespace.

= 2.0.3 - 08/Oct/2021 =

*  Fixed custom block category ERROR in widgets block inserter.

= 2.0.2 - 07/Oct/2021 =

* Optimize some condition judgments

= 2.0.1 - 07/Oct/2021 =

* Fixed Notice: Undefined index ERROR.

= 2.0.0 - 05/Oct/2021 =

* New design! Experience it now!
* Redesign the architecture
* Compatible with 1.0.0

= 1.0.0 - 16/Sep/2021 =

* Initial release

Older changes are found <a href="https://plugins.svn.wordpress.org/toms-video-player/trunk/changelog.txt">in the changelog.txt file in the plugin directory.</a>

== Screenshots ==

1. TomS Video Player block

2. TomS Video Player options Setting

3. add Toms Video Player block from widget inserter

4. TomS Video Player widget go to the settings

5. TomS Video Player widget settings

6. add Toms Video Player block from inserter

7. TomS Video Player block on selected

8. TomS Video Player display effect after published

== Translations ==

Reliance upon any non-English translation is at your own risk; TomS Video Player can give no guarantees that translations from the original English are accurate.

We recognise and thank those mentioned at https://toms-caprice.org/translations for code and/or libraries used and/or modified under the terms of their open source licences.

== Upgrade Notice ==
* 2.1.8: WordPress 6.1 compatibility. a recommended update for all.