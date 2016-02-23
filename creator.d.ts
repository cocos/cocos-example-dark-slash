
/** The main namespace of Cocos2d-JS, all engine core classes, functions, properties and constants are defined in this namespace */
declare module cc {	
	/** Init Debug setting. */
	export function _initDebugSetting(mode : DebugMode) : void;	
	/** Outputs an error message to the Cocos Creator Console (editor) or Web Console (runtime).
	- In Cocos Creator, error is red.
	- In Chrome, error have a red icon along with red message text. */
	export function error(obj : any, subst : any) : void;	
	/** Outputs a warning message to the Cocos Creator Console (editor) or Web Console (runtime).
	- In Cocos Creator, warning is yellow.
	- In Chrome, warning have a yellow warning icon with the message text. */
	export function warn(obj : any, subst : any) : void;	
	/** Outputs a message to the Cocos Creator Console (editor) or Web Console (runtime). */
	export function log(obj : any, subst : any) : void;	
	/** Outputs an informational message to the Cocos Creator Console (editor) or Web Console (runtime).
	- In Cocos Creator, info is blue.
	- In Firefox and Chrome, a small "i" icon is displayed next to these items in the Web Console's log. */
	export function info(obj : any, subst : any) : void;	
	/** Gets the current running speed. <br />
	Will get a percentage number, compared to the original speed. */
	export function getSpeed() : number;	
	/** alter the speed of the inner function in runtime. */
	export function setSpeed(speed : number) : void;	
	/** initializes the action. */
	export function initWithAction(action : ActionInterval, speed : number) : boolean;	
	/** Set inner Action. */
	export function setInnerAction(action : ActionInterval) : void;	
	/** Get inner Action. */
	export function getInnerAction() : ActionInterval;	
	/** Creates the speed action which changes the speed of an action, making it take longer (speed > 1)
	or less (speed < 1) time. <br/>
	Useful to simulate 'slow motion' or 'fast forward' effect. */
	export function speed(action : ActionInterval, speed : number) : Action;	
	/** Create a follow action which makes its target follows another node. */
	export function follow(followedNode : Node, rect : Rect) : Action;	
	/** creates an action with a Cardinal Spline array of points and tension. */
	export function cardinalSplineTo(duration : number, points : any[], tension : number) : ActionInterval;	
	/** creates an action with a Cardinal Spline array of points and tension. */
	export function cardinalSplineBy(duration : number, points : any[], tension : number) : ActionInterval;	
	/** creates an action with a Cardinal Spline array of points and tension. */
	export function catmullRomTo(dt : number, points : any[]) : ActionInterval;	
	/** Creates an action with a Cardinal Spline array of points and tension */
	export function catmullRomBy(dt : number, points : any[]) : ActionInterval;	
	/** Creates the action easing object with the rate parameter. <br />
	From slow to fast. */
	export function easeIn(rate : number) : any;	
	/** Creates the action easing object with the rate parameter. <br />
	From fast to slow. */
	export function easeOut(rate : number) : any;	
	/** Creates the action easing object with the rate parameter. <br />
	Slow to fast then to slow. */
	export function easeInOut(rate : number) : any;	
	/** Creates the action easing object with the rate parameter. <br />
	Reference easeInExpo: <br />
	http://www.zhihu.com/question/21981571/answer/19925418 */
	export function easeExponentialIn() : any;	
	/** creates the action easing object. <br />
	Reference easeOutExpo: <br />
	http://www.zhihu.com/question/21981571/answer/19925418 */
	export function easeExponentialOut() : any;	
	/** creates an EaseExponentialInOut action easing object. <br />
	Reference easeInOutExpo: <br />
	http://www.zhihu.com/question/21981571/answer/19925418 */
	export function easeExponentialInOut() : any;	
	/** creates an EaseSineIn action. <br />
	Reference easeInSine: <br />
	http://www.zhihu.com/question/21981571/answer/19925418 */
	export function easeSineIn() : any;	
	/** Creates an EaseSineOut action easing object. <br />
	Reference easeOutSine: <br />
	http://www.zhihu.com/question/21981571/answer/19925418 */
	export function easeSineOut() : any;	
	/** creates the action easing object. <br />
	Reference easeInOutSine: <br />
	http://www.zhihu.com/question/21981571/answer/19925418 */
	export function easeSineInOut() : any;	
	/** Creates the action easing obejct with the period in radians (default is 0.3). <br />
	Reference easeInElastic: <br />
	http://www.zhihu.com/question/21981571/answer/19925418 */
	export function easeElasticIn(period? : number) : any;	
	/** Creates the action easing object with the period in radians (default is 0.3). <br />
	Reference easeOutElastic: <br />
	http://www.zhihu.com/question/21981571/answer/19925418 */
	export function easeElasticOut(period? : number) : any;	
	/** Creates the action easing object with the period in radians (default is 0.3). <br />
	Reference easeInOutElastic: <br />
	http://www.zhihu.com/question/21981571/answer/19925418 */
	export function easeElasticInOut(period? : number) : any;	
	/** Creates the action easing object. <br />
	Eased bounce effect at the beginning. */
	export function easeBounceIn() : any;	
	/** Creates the action easing object. <br />
	Eased bounce effect at the ending. */
	export function easeBounceOut() : any;	
	/** Creates the action easing object. <br />
	Eased bounce effect at the begining and ending. */
	export function easeBounceInOut() : any;	
	/** Creates the action easing object. <br />
	In the opposite direction to move slowly, and then accelerated to the right direction. */
	export function easeBackIn() : any;	
	/** Creates the action easing object. <br />
	Fast moving more than the finish, and then slowly back to the finish. */
	export function easeBackOut() : any;	
	/** Creates the action easing object. <br />
	Begining of cc.EaseBackIn. Ending of cc.EaseBackOut. */
	export function easeBackInOut() : any;	
	/** Creates the action easing object. <br />
	Into the 4 reference point. <br />
	To calculate the motion curve. */
	export function easeBezierAction(p0 : number, p1 : number, p2 : number, p3 : number) : any;	
	/** Creates the action easing object. <br />
	Reference easeInQuad: <br />
	http://www.zhihu.com/question/21981571/answer/19925418 */
	export function easeQuadraticActionIn() : any;	
	/** Creates the action easing object. <br />
	Reference easeOutQuad: <br />
	http://www.zhihu.com/question/21981571/answer/19925418 */
	export function easeQuadraticActionOut() : any;	
	/** Creates the action easing object. <br />
	Reference easeInOutQuad: <br />
	http://www.zhihu.com/question/21981571/answer/19925418 */
	export function easeQuadraticActionInOut() : any;	
	/** Creates the action easing object. <br />
	Reference easeIntQuart: <br />
	http://www.zhihu.com/question/21981571/answer/19925418 */
	export function easeQuarticActionIn() : any;	
	/** Creates the action easing object. <br />
	Reference easeOutQuart: <br />
	http://www.zhihu.com/question/21981571/answer/19925418 */
	export function easeQuarticActionOut() : any;	
	/** Creates the action easing object.  <br />
	Reference easeInOutQuart: <br />
	http://www.zhihu.com/question/21981571/answer/19925418 */
	export function easeQuarticActionInOut() : any;	
	/** Creates the action easing object. <br />
	Reference easeInQuint: <br />
	http://www.zhihu.com/question/21981571/answer/19925418 */
	export function easeQuinticActionIn() : any;	
	/** Creates the action easing object. <br />
	Reference easeOutQuint: <br />
	http://www.zhihu.com/question/21981571/answer/19925418 */
	export function easeQuinticActionOut() : any;	
	/** Creates the action easing object. <br />
	Reference easeInOutQuint: <br />
	http://www.zhihu.com/question/21981571/answer/19925418 */
	export function easeQuinticActionInOut() : any;	
	/** Creates the action easing object. <br />
	Reference easeInCirc: <br />
	http://www.zhihu.com/question/21981571/answer/19925418 */
	export function easeCircleActionIn() : any;	
	/** Creates the action easing object. <br />
	Reference easeOutCirc: <br />
	http://www.zhihu.com/question/21981571/answer/19925418 */
	export function easeCircleActionOut() : any;	
	/** Creates the action easing object. <br />
	Reference easeInOutCirc: <br />
	http://www.zhihu.com/question/21981571/answer/19925418 */
	export function easeCircleActionInOut() : any;	
	/** Creates the action easing object. <br />
	Reference easeInCubic: <br />
	http://www.zhihu.com/question/21981571/answer/19925418 */
	export function easeCubicActionIn() : any;	
	/** Creates the action easing object. <br />
	Reference easeOutCubic: <br />
	http://www.zhihu.com/question/21981571/answer/19925418 */
	export function easeCubicActionOut() : any;	
	/** Creates the action easing object. <br />
	Reference easeInOutCubic: <br />
	http://www.zhihu.com/question/21981571/answer/19925418 */
	export function easeCubicActionInOut() : any;	
	/** Show the Node. */
	export function show() : ActionInstant;	
	/** Hide the node. */
	export function hide() : ActionInstant;	
	/** Toggles the visibility of a node. */
	export function toggleVisibility() : ActionInstant;	
	/** Create a RemoveSelf object with a flag indicate whether the target should be cleaned up while removing. */
	export function removeSelf(isNeedCleanUp? : boolean) : ActionInstant;	
	/** Create a FlipX action to flip or unflip the target. */
	export function flipX(flip : boolean) : ActionInstant;	
	/** Create a FlipY action to flip or unflip the target. */
	export function flipY(flip : boolean) : ActionInstant;	
	/** Creates a Place action with a position. */
	export function place(pos : Vec2|number, y? : number) : ActionInstant;	
	/** Creates the action with the callback */
	export function callFunc(selector : Function, selectorTarget? : any|void, data? : any|void) : ActionInstant;	
	/** Helper constructor to create an array of sequenceable actions
	The created action will run actions sequentially, one after another. */
	export function sequence(tempArray : any[]|FiniteTimeAction) : ActionInterval;	
	/** Creates a Repeat action. Times is an unsigned integer between 1 and pow(2,30) */
	export function repeat(action : FiniteTimeAction, times : number) : ActionInterval;	
	/** Create a acton which repeat forever */
	export function repeatForever(action : FiniteTimeAction) : ActionInterval;	
	/** Create a spawn action which runs several actions in parallel. */
	export function spawn(tempArray : any[]|FiniteTimeAction) : FiniteTimeAction;	
	/** Rotates a Node object to a certain angle by modifying its rotation property. <br/>
	The direction will be decided by the shortest angle. */
	export function rotateTo(duration : number, deltaAngleX : number, deltaAngleY? : number) : ActionInterval;	
	/** Rotates a Node object clockwise a number of degrees by modifying its rotation property.
	Relative to its properties to modify. */
	export function rotateBy(duration : number, deltaAngleX : number, deltaAngleY? : number) : ActionInterval;	
	/** Moves a Node object x,y pixels by modifying its position property.                                  <br/>
	x and y are relative to the position of the object.                                                     <br/>
	Several MoveBy actions can be concurrently called, and the resulting                                  <br/>
	movement will be the sum of individual movements. */
	export function moveBy(duration : number, deltaPos : Vec2|number, deltaY : number) : ActionInterval;	
	/** Moves a Node object to the position x,y. x and y are absolute coordinates by modifying its position property. <br/>
	Several MoveTo actions can be concurrently called, and the resulting                                            <br/>
	movement will be the sum of individual movements. */
	export function moveTo(duration : number, position : Vec2, y : number) : ActionInterval;	
	/** Create a action which skews a Node object to given angles by modifying its skewX and skewY properties.
	Changes to the specified value. */
	export function skewTo(t : number, sx : number, sy : number) : ActionInterval;	
	/** Skews a Node object by skewX and skewY degrees. <br />
	Relative to its property modification. */
	export function skewBy(t : number, sx : number, sy : number) : ActionInterval;	
	/** Moves a Node object simulating a parabolic jump movement by modifying it's position property.
	Relative to its movement. */
	export function jumpBy(duration : number, position : Vec2|number, y? : number, height : number, jumps : number) : ActionInterval;	
	/** Moves a Node object to a parabolic position simulating a jump movement by modifying its position property. <br />
	Jump to the specified location. */
	export function jumpTo(duration : number, position : Vec2|number, y? : number, height : number, jumps : number) : ActionInterval;	
	/** An action that moves the target with a cubic Bezier curve by a certain distance.
	Relative to its movement. */
	export function bezierBy(t : number, c : any[]) : ActionInterval;	
	/** An action that moves the target with a cubic Bezier curve to a destination point. */
	export function bezierTo(t : number, c : any[]) : ActionInterval;	
	/** Scales a Node object to a zoom factor by modifying it's scale property. */
	export function scaleTo(duration : number, sx : number, sy? : number) : ActionInterval;	
	/** Scales a Node object a zoom factor by modifying it's scale property.
	Relative to its changes. */
	export function scaleBy(duration : number, sx : number, sy? : number|void) : ActionInterval;	
	/** Blinks a Node object by modifying it's visible property. */
	export function blink(duration : number, blinks : number) : ActionInterval;	
	/** Fades an object that implements the cc.RGBAProtocol protocol. It modifies the opacity from the current value to a custom one. */
	export function fadeTo(duration : number, opacity : number) : ActionInterval;	
	/** Fades In an object that implements the cc.RGBAProtocol protocol. It modifies the opacity from 0 to 255. */
	export function fadeIn(duration : number) : ActionInterval;	
	/** Fades Out an object that implements the cc.RGBAProtocol protocol. It modifies the opacity from 255 to 0. */
	export function fadeOut(d : number) : ActionInterval;	
	/** Tints a Node that implements the cc.NodeRGB protocol from current tint to a custom one. */
	export function tintTo(duration : number, red : number, green : number, blue : number) : ActionInterval;	
	/** Tints a Node that implements the cc.NodeRGB protocol from current tint to a custom one.
	Relative to their own color change. */
	export function tintBy(duration : number, deltaRed : number, deltaGreen : number, deltaBlue : number) : ActionInterval;	
	/** Delays the action a certain amount of seconds */
	export function delayTime(d : number) : ActionInterval;	
	/** Executes an action in reverse order, from time=duration to time=0. */
	export function reverseTime(action : FiniteTimeAction) : ActionInterval;	
	/** create the animate with animation */
	export function animate(animation : SpriteFrameAnimation) : ActionInterval;	
	/** Create an action with the specified action and forced target */
	export function targetedAction(target : Node, action : FiniteTimeAction) : ActionInterval;	
	export var director : cc.Director;	
	/** cc.winSize is the alias object for the size of the current game window. */
	export var winSize : cc.Size;	
	/** Minimum priority level for user scheduling. */
	export var PRIORITY_NON_SYSTEM : number;	
	export var CUSTOM : number;	
	export var TRIMMED : number;	
	export var RAW : number;	
	/** Checks whether subclass is child of superclass or equals to superclass */
	export function isChildClassOf(subclass : Function, superclass : Function) : boolean;	
	/** !#en Defines a CCClass using the given specification, please see [Class](/en/scripting/class/) for details.
	!#zh 定义一个 CCClass，传入参数必须是一个包含类型参数的字面量对象，具体用法请查阅[类型定义](/zh/scripting/class/)。 */
	export function Class(options
	TODO: : any) : Function;	
	/** Function added for JS bindings compatibility. Not needed in cocos2d-html5. */
	export function associateWithNative(jsObj : any, superclass : any) : void;	
	/** Image Format:JPG */
	export var FMT_JPG : number;	
	/** Image Format:PNG */
	export var FMT_PNG : number;	
	/** Image Format:TIFF */
	export var FMT_TIFF : number;	
	/** Image Format:RAWDATA */
	export var FMT_RAWDATA : number;	
	/** Image Format:WEBP */
	export var FMT_WEBP : number;	
	/** Image Format:UNKNOWN */
	export var FMT_UNKNOWN : number;	
	/** get image format by image data */
	export function getImageFormatByData(imgData : any[]) : number;	
	/** Another way to subclass: Using Google Closure.
	The following code was copied + pasted from goog.base / goog.inherits */
	export function inherits(childCtor : Function, parentCtor : Function) : void;	
	/** <p>
	  If enabled, the texture coordinates will be calculated by using this formula: <br/>
	     - texCoord.left = (rect.x*2+1) / (texture.wide*2);                  <br/>
	     - texCoord.right = texCoord.left + (rect.width*2-2)/(texture.wide*2); <br/>
	                                                                                <br/>
	 The same for bottom and top.                                                   <br/>
	                                                                                <br/>
	 This formula prevents artifacts by using 99% of the texture.                   <br/>
	 The "correct" way to prevent artifacts is by using the spritesheet-artifact-fixer.py or a similar tool.<br/>
	                                                                                 <br/>
	 Affected nodes:                                                                 <br/>
	     - _ccsg.Sprite / cc.SpriteBatchNode and subclasses: cc.LabelBMFont, cc.TMXTiledMap <br/>
	     - cc.LabelAtlas                                                              <br/>
	     - cc.QuadParticleSystem                                                      <br/>
	     - cc.TileMap                                                                 <br/>
	                                                                                 <br/>
	 To enabled set it to 1. Disabled by default.<br/>
	 To modify it, in Web engine please refer to CCConfig.js, in JSB please refer to CCConfig.h
	</p> */
	export var FIX_ARTIFACTS_BY_STRECHING_TEXEL : number;	
	/** Position of the FPS (Default: 0,0 (bottom-left corner))<br/>
	To modify it, in Web engine please refer to CCConfig.js, in JSB please refer to CCConfig.h */
	export var DIRECTOR_STATS_POSITION : Vec2;	
	/** <p>
	  Seconds between FPS updates.<br/>
	  0.5 seconds, means that the FPS number will be updated every 0.5 seconds.<br/>
	  Having a bigger number means a more reliable FPS<br/>
	  <br/>
	  Default value: 0.1f<br/>
	  To modify it, in Web engine please refer to CCConfig.js, in JSB please refer to CCConfig.h
	</p> */
	export var DIRECTOR_FPS_INTERVAL : number;	
	/** <p>
	   If enabled, the ccsg.Node objects (_ccsg.Sprite, _ccsg.Label,etc) will be able to render in subpixels.<br/>
	   If disabled, integer pixels will be used.<br/>
	   <br/>
	   To enable set it to 1. Enabled by default.<br/>
	   To modify it, in Web engine please refer to CCConfig.js, in JSB please refer to CCConfig.h
	</p> */
	export var COCOSNODE_RENDER_SUBPIXEL : number;	
	/** <p>
	  If enabled, the _ccsg.Sprite objects rendered with cc.SpriteBatchNode will be able to render in subpixels.<br/>
	  If disabled, integer pixels will be used.<br/>
	  <br/>
	  To enable set it to 1. Enabled by default.<br/>
	  To modify it, in Web engine please refer to CCConfig.js, in JSB please refer to CCConfig.h
	</p> */
	export var SPRITEBATCHNODE_RENDER_SUBPIXEL : number;	
	/** <p>
	    Automatically premultiply alpha for PNG resources
	</p> */
	export var AUTO_PREMULTIPLIED_ALPHA_FOR_PNG : number;	
	/** <p>
	    If most of your images have pre-multiplied alpha, set it to 1 (if you are going to use .PNG/.JPG file images).<br/>
	    Only set to 0 if ALL your images by-pass Apple UIImage loading system (eg: if you use libpng or PVR images)<br/>
	    <br/>
	    To enable set it to a value different than 0. Enabled by default.<br/>
	    To modify it, in Web engine please refer to CCConfig.js, in JSB please refer to CCConfig.h
	</p> */
	export var OPTIMIZE_BLEND_FUNC_FOR_PREMULTIPLIED_ALPHA : number;	
	/** <p>
	  Use GL_TRIANGLE_STRIP instead of GL_TRIANGLES when rendering the texture atlas.<br/>
	  It seems it is the recommend way, but it is much slower, so, enable it at your own risk<br/>
	  <br/>
	  To enable set it to a value different than 0. Disabled by default.<br/>
	  To modify it, in Web engine please refer to CCConfig.js, in JSB please refer to CCConfig.h
	</p> */
	export var TEXTURE_ATLAS_USE_TRIANGLE_STRIP : number;	
	/** <p>
	   By default, cc.TextureAtlas (used by many cocos2d classes) will use VAO (Vertex Array Objects).<br/>
	   Apple recommends its usage but they might consume a lot of memory, specially if you use many of them.<br/>
	   So for certain cases, where you might need hundreds of VAO objects, it might be a good idea to disable it.<br/>
	   <br/>
	   To disable it set it to 0. disable by default.(Not Supported on WebGL)<br/>
	   To modify it, in Web engine please refer to CCConfig.js, in JSB please refer to CCConfig.h
	</p> */
	export var TEXTURE_ATLAS_USE_VAO : number;	
	/** <p>
	   It's the suffix that will be appended to the files in order to load "retina display" images.<br/>
	   <br/>
	   On an iPhone4 with Retina Display support enabled, the file @"sprite-hd.png" will be loaded instead of @"sprite.png".<br/>
	   If the file doesn't exist it will use the non-retina display image.<br/>
	   <br/>
	   Platforms: Only used on Retina Display devices like iPhone 4.
	</p> */
	export var RETINA_DISPLAY_FILENAME_SUFFIX : string;	
	/** <p>
	    If enabled, it will use LA88 (Luminance Alpha 16-bit textures) for CCLabelTTF objects. <br/>
	    If it is disabled, it will use A8 (Alpha 8-bit textures).                              <br/>
	    LA88 textures are 6% faster than A8 textures, but they will consume 2x memory.         <br/>
	                                                                                           <br/>
	    This feature is enabled by default.
	</p> */
	export var USE_LA88_LABELS : number;	
	/** <p>
	  If enabled, all subclasses of _ccsg.Sprite will draw a bounding box<br/>
	  Useful for debugging purposes only. It is recommend to leave it disabled.<br/>
	  <br/>
	  To enable set it to a value different than 0. Disabled by default:<br/>
	     0 -- disabled<br/>
	     1 -- draw bounding box<br/>
	     2 -- draw texture box
	</p> */
	export var SPRITE_DEBUG_DRAW : number;	
	/** <p>
	   If enabled, all subclasses of _ccsg.Sprite that are rendered using an cc.SpriteBatchNode draw a bounding box.<br/>
	   Useful for debugging purposes only. It is recommend to leave it disabled.<br/>
	   <br/>
	   To enable set it to a value different than 0. Disabled by default.
	</p> */
	export var SPRITEBATCHNODE_DEBUG_DRAW : number;	
	/** <p>
	  If enabled, all subclasses of cc.LabelBMFont will draw a bounding box <br/>
	  Useful for debugging purposes only. It is recommend to leave it disabled.<br/>
	  <br/>
	  To enable set it to a value different than 0. Disabled by default.<br/>
	</p> */
	export var LABELBMFONT_DEBUG_DRAW : number;	
	/** <p>
	   If enabled, all subclasses of cc.LabelAtlas will draw a bounding box<br/>
	   Useful for debugging purposes only. It is recommend to leave it disabled.<br/>
	   <br/>
	   To enable set it to a value different than 0. Disabled by default.
	</p> */
	export var LABELATLAS_DEBUG_DRAW : number;	
	/** Whether or not support retina display */
	export var IS_RETINA_DISPLAY_SUPPORTED : number;	
	/** Default engine */
	export var DEFAULT_ENGINE : string;	
	/** <p>
	   If enabled, actions that alter the position property (eg: CCMoveBy, CCJumpBy, CCBezierBy, etc..) will be stacked.                  <br/>
	   If you run 2 or more 'position' actions at the same time on a node, then end position will be the sum of all the positions.        <br/>
	   If disabled, only the last run action will take effect.
	</p> */
	export var ENABLE_STACKABLE_ACTIONS : number;	
	/** <p>
	     If enabled, cocos2d will maintain an OpenGL state cache internally to avoid unnecessary switches.                                     <br/>
	     In order to use them, you have to use the following functions, instead of the the GL ones:                                             <br/>
	         - ccGLUseProgram() instead of glUseProgram()                                                                                      <br/>
	         - ccGLDeleteProgram() instead of glDeleteProgram()                                                                                <br/>
	         - ccGLBlendFunc() instead of glBlendFunc()                                                                                        <br/>
	                                                                                                                                           <br/>
	     If this functionality is disabled, then ccGLUseProgram(), ccGLDeleteProgram(), ccGLBlendFunc() will call the GL ones, without using the cache.              <br/>
	     It is recommend to enable whenever possible to improve speed.                                                                        <br/>
	     If you are migrating your code from GL ES 1.1, then keep it disabled. Once all your code works as expected, turn it on.
	</p> */
	export var ENABLE_GL_STATE_CACHE : number;	
	/** whether enable accelerometer event */
	export function setAccelerometerEnabled(isEnable : boolean) : void;	
	/** set accelerometer interval value */
	export function setAccelerometerInterval(interval : number) : void;	
	export var INVALID_INDEX : number;	
	/** PI is the ratio of a circle's circumference to its diameter. */
	export var PI : number;	
	export var FLT_MAX : number;	
	export var FLT_MIN : number;	
	export var RAD : number;	
	export var DEG : number;	
	/** maximum unsigned int value */
	export var UINT_MAX : number;	
	/** <p>
	simple macro that swaps 2 variables<br/>
	 modified from c++ macro, you need to pass in the x and y variables names in string, <br/>
	 and then a reference to the whole object as third variable
	</p> */
	export function swap(x : string, y : string, ref : any) : void;	
	/** <p>
	    Linear interpolation between 2 numbers, the ratio sets how much it is biased to each end
	</p> */
	export function lerp(a : number, b : number, r : number) : void;	
	/** get a random number from 0 to 0xffffff */
	export function rand() : number;	
	/** returns a random float between -1 and 1 */
	export function randomMinus1To1() : number;	
	/** returns a random float between 0 and 1 */
	export function random0To1() : number;	
	/** converts degrees to radians */
	export function degreesToRadians(angle : number) : number;	
	/** converts radians to degrees */
	export function radiansToDegrees(angle : number) : number;	
	/** converts radians to degrees */
	export function radiansToDegress(angle : number) : number;	
	export var REPEAT_FOREVER : number;	
	/** Helpful macro that setups the GL server state, the correct GL program and sets the Model View Projection matrix */
	export function nodeDrawSetup(node : Node) : void;	
	/** <p>
	    GL states that are enabled:<br/>
	      - GL_TEXTURE_2D<br/>
	      - GL_VERTEX_ARRAY<br/>
	      - GL_TEXTURE_COORD_ARRAY<br/>
	      - GL_COLOR_ARRAY<br/>
	</p> */
	export function enableDefaultGLStates() : void;	
	/** <p>
	  Disable default GL states:<br/>
	    - GL_TEXTURE_2D<br/>
	    - GL_TEXTURE_COORD_ARRAY<br/>
	    - GL_COLOR_ARRAY<br/>
	</p> */
	export function disableDefaultGLStates() : void;	
	/** <p>
	 Increments the GL Draws counts by one.<br/>
	 The number of calls per frame are displayed on the screen when the CCDirector's stats are enabled.<br/>
	</p> */
	export function incrementGLDraws(addNumber : number) : void;	
	export var FLT_EPSILON : number;	
	/** <p>
	    On Mac it returns 1;<br/>
	    On iPhone it returns 2 if RetinaDisplay is On. Otherwise it returns 1
	</p> */
	export function contentScaleFactor() : number;	
	/** Converts a Point in points to pixels */
	export function pointPointsToPixels(points : Vec2) : Vec2;	
	/** Converts a Point in pixels to points */
	export function pointPixelsToPoints(pixels : Rect) : Vec2;	
	/** Converts a Size in points to pixels */
	export function sizePointsToPixels(sizeInPoints : Size) : Size;	
	/** Converts a size in pixels to points */
	export function sizePixelsToPoints(sizeInPixels : Size) : Size;	
	/** Converts a rect in pixels to points */
	export function rectPixelsToPoints(pixel : Rect) : Rect;	
	/** Converts a rect in points to pixels */
	export function rectPointsToPixels(point : Rect) : Rect;	
	export var ONE : number;	
	export var ZERO : number;	
	export var SRC_ALPHA : number;	
	export var SRC_ALPHA_SATURATE : number;	
	export var SRC_COLOR : number;	
	export var DST_ALPHA : number;	
	export var DST_COLOR : number;	
	export var ONE_MINUS_SRC_ALPHA : number;	
	export var ONE_MINUS_SRC_COLOR : number;	
	export var ONE_MINUS_DST_ALPHA : number;	
	export var ONE_MINUS_DST_COLOR : number;	
	export var ONE_MINUS_CONSTANT_ALPHA : number;	
	export var ONE_MINUS_CONSTANT_COLOR : number;	
	/** the constant variable equals gl.LINEAR for texture */
	export var LINEAR : number;	
	/** default gl blend src function. Compatible with premultiplied alpha images. */
	export var BLEND_SRC : number;	
	/** default gl blend dst function. Compatible with premultiplied alpha images. */
	export var BLEND_DST : number;	
	/** Check webgl error.Error will be shown in console if exists. */
	export function checkGLErrorDebug() : void;	
	/** Device oriented vertically, home button on the bottom (UIDeviceOrientationPortrait) */
	export var DEVICE_ORIENTATION_PORTRAIT : number;	
	/** Device oriented horizontally, home button on the right (UIDeviceOrientationLandscapeLeft) */
	export var DEVICE_ORIENTATION_LANDSCAPE_LEFT : number;	
	/** Device oriented vertically, home button on the top (UIDeviceOrientationPortraitUpsideDown) */
	export var DEVICE_ORIENTATION_PORTRAIT_UPSIDE_DOWN : number;	
	/** Device oriented horizontally, home button on the left (UIDeviceOrientationLandscapeRight) */
	export var DEVICE_ORIENTATION_LANDSCAPE_RIGHT : number;	
	/** In browsers, we only support 2 orientations by change window size. */
	export var DEVICE_MAX_ORIENTATIONS : number;	
	export var VERTEX_ATTRIB_FLAG_NONE : number;	
	export var VERTEX_ATTRIB_FLAG_POSITION : number;	
	export var VERTEX_ATTRIB_FLAG_COLOR : number;	
	export var VERTEX_ATTRIB_FLAG_TEX_COORDS : number;	
	export var VERTEX_ATTRIB_FLAG_POS_COLOR_TEX : number;	
	/** GL server side states */
	export var GL_ALL : number;	
	export var VERTEX_ATTRIB_POSITION : number;	
	export var VERTEX_ATTRIB_COLOR : number;	
	export var VERTEX_ATTRIB_TEX_COORDS : number;	
	export var VERTEX_ATTRIB_MAX : number;	
	export var UNIFORM_PMATRIX : number;	
	export var UNIFORM_MVMATRIX : number;	
	export var UNIFORM_MVPMATRIX : number;	
	export var UNIFORM_TIME : number;	
	export var UNIFORM_SINTIME : number;	
	export var UNIFORM_COSTIME : number;	
	export var UNIFORM_RANDOM01 : number;	
	export var UNIFORM_SAMPLER : number;	
	export var UNIFORM_MAX : number;	
	export var SHADER_POSITION_TEXTURECOLOR : string;	
	export var SHADER_POSITION_TEXTURECOLORALPHATEST : string;	
	export var SHADER_POSITION_COLOR : string;	
	export var SHADER_POSITION_TEXTURE : string;	
	export var SHADER_POSITION_TEXTURE_UCOLOR : string;	
	export var SHADER_POSITION_TEXTUREA8COLOR : string;	
	export var SHADER_POSITION_UCOLOR : string;	
	export var SHADER_POSITION_LENGTHTEXTURECOLOR : string;	
	export var UNIFORM_PMATRIX_S : string;	
	export var UNIFORM_MVMATRIX_S : string;	
	export var UNIFORM_MVPMATRIX_S : string;	
	export var UNIFORM_TIME_S : string;	
	export var UNIFORM_SINTIME_S : string;	
	export var UNIFORM_COSTIME_S : string;	
	export var UNIFORM_RANDOM01_S : string;	
	export var UNIFORM_SAMPLER_S : string;	
	export var UNIFORM_ALPHA_TEST_VALUE_S : string;	
	export var ATTRIBUTE_NAME_COLOR : string;	
	export var ATTRIBUTE_NAME_POSITION : string;	
	export var ATTRIBUTE_NAME_TEX_COORD : string;	
	/** default size for font size */
	export var ITEM_SIZE : number;	
	/** default tag for current item */
	export var CURRENT_ITEM : number;	
	/** default tag for zoom action tag */
	export var ZOOM_ACTION_TAG : number;	
	/** default tag for normal */
	export var NORMAL_TAG : number;	
	/** default selected tag */
	export var SELECTED_TAG : number;	
	/** default disabled tag */
	export var DISABLE_TAG : number;	
	/** Checks whether the object is non-nil and not yet destroyed */
	export function isValid(value : any) : boolean;	
	/** Specify that the input value must be integer in Inspector.
	Also used to indicates that the elements in array should be type integer. */
	export var Integer : string;	
	/** Indicates that the elements in array should be type double. */
	export var Float : string;	
	/** Indicates that the elements in array should be type boolean. */
	export var Boolean : string;	
	/** Indicates that the elements in array should be type string. */
	export var String : string;	
	/** !#en Deserialize json to cc.Asset
	!#zh 将 JSON 反序列化为对象实例。
	
	当指定了 target 选项时，如果 target 引用的其它 asset 的 uuid 不变，则不会改变 target 对 asset 的引用，
	也不会将 uuid 保存到 result 对象中。 */
	export function deserialize(data : string|any, result? : Details, options? : any) : any;	
	/** !#en Clones the object original and returns the clone.
	
	See [Clone exists Entity](/en/scripting/create-destroy-entities/#instantiate)
	
	!#zh 复制给定的对象
	
	详细用法可参考[复制已有Entity](/zh/scripting/create-destroy-entities/#instantiate)
	
	Instantiate 时，function 和 dom 等非可序列化对象会直接保留原有引用，Asset 会直接进行浅拷贝，可序列化类型会进行深拷贝。
	<del>对于 Entity / Component 等 Scene Object，如果对方也会被一起 Instantiate，则重定向到新的引用，否则保留为原来的引用。</del> */
	export function instantiate(original : any) : any;	
	/** convert an affine transform object to a kmMat4 object */
	export function CGAffineToGL(trans : cc.AffineTransform, mat : cc.kmMat4) : void;	
	/** Convert a kmMat4 object to an affine transform object */
	export function GLToCGAffine(mat : cc.kmMat4, trans : cc.AffineTransform) : void;	
	/** Define an enum type. If a enum item has a value of -1, it will be given an Integer number according to it's order in the list. Otherwise it will use the value specified by user who writes the enum definition. */
	export function Enum(obj : any) : any;	
	/** Returns opposite of point. */
	export function pNeg(point : Vec2) : Vec2;	
	/** Calculates sum of two points. */
	export function pAdd(v1 : Vec2, v2 : Vec2) : Vec2;	
	/** Calculates difference of two points. */
	export function pSub(v1 : Vec2, v2 : Vec2) : Vec2;	
	/** Returns point multiplied by given factor. */
	export function pMult(point : Vec2, floatVar : number) : Vec2;	
	/** Calculates midpoint between two points. */
	export function pMidpoint(v1 : Vec2, v2 : Vec2) : Vec2;	
	/** Calculates dot product of two points. */
	export function pDot(v1 : Vec2, v2 : Vec2) : number;	
	/** Calculates cross product of two points. */
	export function pCross(v1 : Vec2, v2 : Vec2) : number;	
	/** Calculates perpendicular of v, rotated 90 degrees counter-clockwise -- cross(v, perp(v)) greater than 0 */
	export function pPerp(point : Vec2) : Vec2;	
	/** Calculates perpendicular of v, rotated 90 degrees clockwise -- cross(v, rperp(v)) smaller than 0 */
	export function pRPerp(point : Vec2) : Vec2;	
	/** Calculates the projection of v1 over v2. */
	export function pProject(v1 : Vec2, v2 : Vec2) : Vec2;	
	/** Rotates two points. */
	export function pRotate(v1 : Vec2, v2 : Vec2) : Vec2;	
	/** Unrotates two points. */
	export function pUnrotate(v1 : Vec2, v2 : Vec2) : Vec2;	
	/** Calculates the square length of a cc.Vec2 (not calling sqrt() ) */
	export function pLengthSQ(v : Vec2) : number;	
	/** Calculates the square distance between two points (not calling sqrt() ) */
	export function pDistanceSQ(point1 : Vec2, point2 : Vec2) : number;	
	/** Calculates distance between point an origin */
	export function pLength(v : Vec2) : number;	
	/** Calculates the distance between two points */
	export function pDistance(v1 : Vec2, v2 : Vec2) : number;	
	/** Returns point multiplied to a length of 1. */
	export function pNormalize(v : Vec2) : Vec2;	
	/** Converts radians to a normalized vector. */
	export function pForAngle(a : number) : Vec2;	
	/** Converts a vector to radians. */
	export function pToAngle(v : Vec2) : number;	
	/** Clamp a value between from and to. */
	export function clampf(value : number, min_inclusive : number, max_inclusive : number) : number;	
	/** Clamp a value between 0 and 1. */
	export function clamp01(value : number) : number;	
	/** Clamp a point between from and to. */
	export function pClamp(p : Vec2, min_inclusive : number, max_inclusive : number) : Vec2;	
	/** Quickly convert cc.Size to a cc.Vec2. */
	export function pFromSize(s : Size) : Vec2;	
	/** Run a math operation function on each point component <br />
	Math.abs, Math.fllor, Math.ceil, Math.round. */
	export function pCompOp(p : Vec2, opFunc : Function) : Vec2;	
	/** Linear Interpolation between two points a and b.
	alpha == 0 ? a
	alpha == 1 ? b
	otherwise a value between a..b */
	export function pLerp(a : Vec2, b : Vec2, alpha : number) : Vec2;	
	export function pFuzzyEqual(a : Vec2, b : Vec2, variance : number) : boolean;	
	/** Multiplies a nd b components, a.x*b.x, a.y*b.y. */
	export function pCompMult(a : Vec2, b : Vec2) : Vec2;	
	export function pAngleSigned(a : Vec2, b : Vec2) : number;	
	export function pAngle(a : Vec2, b : Vec2) : number;	
	/** Rotates a point counter clockwise by the angle around a pivot. */
	export function pRotateByAngle(v : Vec2, pivot : Vec2, angle : number) : Vec2;	
	/** A general line-line intersection test
	indicating successful intersection of a line<br />
	note that to truly test intersection for segments we have to make<br />
	sure that s & t lie within [0..1] and for rays, make sure s & t > 0<br />
	the hit point is        p3 + t * (p4 - p3);<br />
	the hit point also is    p1 + s * (p2 - p1); */
	export function pLineIntersect(A : Vec2, B : Vec2, C : Vec2, D : Vec2, retP : Vec2) : boolean;	
	/** ccpSegmentIntersect return YES if Segment A-B intersects with segment C-D. */
	export function pSegmentIntersect(A : Vec2, B : Vec2, C : Vec2, D : Vec2) : boolean;	
	/** ccpIntersectPoint return the intersection point of line A-B, C-D. */
	export function pIntersectPoint(A : Vec2, B : Vec2, C : Vec2, D : Vec2) : Vec2;	
	/** check to see if both points are equal. */
	export function pSameAs(A : Vec2, B : Vec2) : boolean;	
	/** sets the position of the point to 0. */
	export function pZeroIn(v : Vec2) : void;	
	/** copies the position of one point to another. */
	export function pIn(v1 : Vec2, v2 : Vec2) : void;	
	/** multiplies the point with the given factor (inplace). */
	export function pMultIn(point : Vec2, floatVar : number) : void;	
	/** subtracts one point from another (inplace). */
	export function pSubIn(v1 : Vec2, v2 : Vec2) : void;	
	/** adds one point to another (inplace). */
	export function pAddIn(v1 : Vec2, v2 : Vec2) : void;	
	/** normalizes the point (inplace). */
	export function pNormalizeIn(v : Vec2) : void;	
	export function V3F_C4B_T2F_QuadZero() : V3F_C4B_T2F_Quad;	
	export function V3F_C4B_T2F_QuadCopy(sourceQuad: (tl: V3F_C4B_T2F, bl: V3F_C4B_T2F, tr: V3F_C4B_T2F, br: V3F_C4B_T2F, arrayBuffer: any[], offset: number) => void) : V3F_C4B_T2F_Quad;	
	export function V3F_C4B_T2F_QuadsCopy(sourceQuads : any[]) : any[];	
	/** The convenience method to create a new {{#crossLink Vec2/Vec2 }}{{/crossLink}} */
	export function v2(x? : number|any, y? : number) : Vec2;	
	/** Helper function that creates a cc.Vec2. */
	export function p(x? : number|any, y? : number) : cc.Vec2;	
	/** Check whether a point's value equals to another */
	export function pointEqualToPoint(point1 : cc.Vec2, point2 : cc.Vec2) : boolean;	
	/** Finds a node by hierarchy path, the path is case-sensitive.
	It will traverse the hierarchy by splitting the path using '/' character.
	This function will still returns the node even if it is inactive.
	It is recommended to not use this function every frame instead cache the result at startup. */
	export function find(path : string, referenceNode? : Node) : Node;	
	/** Enum for debug modes. */
	export enum DebugMode {		
		NONE = 0,
		INFO = 0,
		WARN = 0,
		ERROR = 0,
		INFO_FOR_WEB_PAGE = 0,
		WARN_FOR_WEB_PAGE = 0,
		ERROR_FOR_WEB_PAGE = 0,	
	}	
	/** Base class cc.Action for action classes. */
	export class Action {		
		/** to copy object with deep copy.
		returns a clone of action. */
		clone() : Action;		
		/** return true if the action has finished. */
		isDone() : boolean;		
		/** get the target. */
		getTarget() : Node;		
		/** The action will modify the target properties. */
		setTarget(target : Node) : void;		
		/** get the original target. */
		getOriginalTarget() : Node;		
		/** get tag number. */
		getTag() : number;		
		/** set tag number. */
		setTag(tag : number) : void;	
	}	
	/** Base class actions that do have a finite time duration. <br/>
	Possible actions: <br/>
	- An action with a duration of 0 seconds. <br/>
	- An action with a duration of 35.5 seconds.
	
	Infinite time actions are valid */
	export class FiniteTimeAction extends Action {		
		/** get duration of the action. (seconds) */
		getDuration() : number;		
		/** set duration of the action. (seconds) */
		setDuration(duration : number) : void;		
		/** Returns a reversed action. <br />
		For example: <br />
		- The action will be x coordinates of 0 move to 100. <br />
		- The reversed action will be x of 100 move to 0.
		- Will be rewritten */
		reverse() : void;		
		/** to copy object with deep copy.
		returns a clone of action. */
		clone() : FiniteTimeAction;	
	}	
	/** Base class for Easing actions */
	export class ActionEase extends ActionInterval {	
	}	
	/** Base class for Easing actions with rate parameters */
	export class EaseRateAction extends ActionEase {	
	}	
	/** Ease Elastic abstract class. */
	export class EaseElastic extends ActionEase {	
	}	
	/** cc.EaseBounce abstract class. */
	export class EaseBounce extends ActionEase {	
	}	
	/** Instant actions are immediate actions. They don't have a duration like the ActionInterval actions. */
	export class ActionInstant extends FiniteTimeAction {	
	}	
	/** <p> An interval action is an action that takes place within a certain period of time. <br/>
	It has an start time, and a finish time. The finish time is the parameter<br/>
	duration plus the start time.</p>
	
	<p>These CCActionInterval actions have some interesting properties, like:<br/>
	- They can run normally (default)  <br/>
	- They can run reversed with the reverse method   <br/>
	- They can run with the time altered with the Accelerate, AccelDeccel and Speed actions. </p>
	
	<p>For example, you can simulate a Ping Pong effect running the action normally and<br/>
	then running it again in Reverse mode. </p> */
	export class ActionInterval extends FiniteTimeAction {		
		/** Repeats an action a number of times.
		To repeat an action forever use the CCRepeatForever action. */
		repeat(times : void) : ActionInterval;		
		/** Repeats an action for ever.  <br/>
		To repeat the an action for a limited number of times use the Repeat action. <br/> */
		repeatForever() : ActionInterval;	
	}	
	/** Class for animation data handling. */
	export class AnimationClip extends Asset {		
		constructor();		
		/** Curve data */
		curveData : any;		
		/** Event data */
		events : any[];	
	}	
	/** SampledAnimCurve, 这里面的数值需要是已经都预先sample好了的,
	所以 SampledAnimCurve 中查找 frame index 的速度会非常快 */
	export class SampledAnimCurve extends DynamicAnimCurve {		
		constructor();	
	}	
	/** Event information, */
	export class EventInfo {		
		constructor();	
	}	
	/** undefined */
	export class EventAnimCurve extends AnimCurve {		
		constructor();		
		/** The object being animated. */
		target : any;		
		ratios : Number[];		
		events : EventInfo[];		
		/** Last wrapped info */
		_lastWrappedInfo : any;	
	}	
	/** The AnimationState gives full control over animation playback process.
	In most cases the Animation Component is sufficient and easier to use. Use the AnimationState if you need full control. */
	export class AnimationState extends AnimationNode {		
		constructor();		
		AnimationState(clip : AnimationClip, name? : string) : AnimationState;		
		/** The clip that is being played by this animation state. */
		clip : AnimationClip;		
		/** The name of the playing animation. */
		name : string;	
	}	
	/** undefined */
	export class Playable {		
		constructor();		
		/** Is playing or paused in play mode? */
		isPlaying : boolean;		
		/** Is currently paused? This can be true even if in edit mode(isPlaying == false). */
		isPaused : boolean;		
		/** Play this animation */
		play() : void;		
		/** Stop this animation */
		stop() : void;		
		/** Pause this animation */
		pause() : void;		
		/** Resume this animation */
		resume() : void;		
		/** Perform a single frame step. */
		step() : void;	
	}	
	/** Specifies how time is treated when it is outside of the keyframe range of an Animation. */
	export enum WrapMode {		
		Default = 0,
		Normal = 0,
		Reverse = 0,
		Loop = 0,
		LoopReverse = 0,
		PingPong = 0,
		PingPongReverse = 0,	
	}	
	/** The abstract interface for all playing animation. */
	export class AnimationNodeBase extends Playable {		
		constructor();	
	}	
	/** The collection and instance of playing animations created by entity.animate. */
	export class AnimationNode extends AnimationNodeBase {		
		constructor(animator : Animator, curves : AnimCurve[], timingInput : any);		
		curves : AnimCurve[];		
		/** !#en The start delay which represents the number of seconds from an animation's start time to the start of
		the active interval.
		!#zh 延迟多少秒播放 */
		delay : number;		
		/** !#en The animation's iteration count property.
		
		A real number greater than or equal to zero (including positive infinity) representing the number of times
		to repeat the animation node.
		
		Values less than zero and NaN values are treated as the value 1.0 for the purpose of timing model
		calculations.
		
		!#zh 迭代次数, 指动画播放多少次后结束, normalize time. 如 2.5 ( 2次半 ) */
		repeatCount : number;		
		/** !#en The iteration duration of this animation in seconds. (length)
		!#zh 单次动画的持续时间, 秒 */
		duration : number;		
		/** !#en The animation's playback speed. 1 is normal playback speed.
		!#zh 播放速率 */
		speed : number;		
		/** !#en Wrapping mode of the playing animation.
		!#zh 动画循环方式 */
		wrapMode : WrapMode;		
		/** The current time of this animation in seconds. */
		time : number;	
	}	
	/** undefined */
	export class HashElement extends cc._Class {		
		/** Constructor */
		HashElement() : void;	
	}	
	/** cc.ActionManager is a class that can manage actions.<br/>
	Normally you won't need to use this class directly. 99% of the cases you will use the CCNode interface,
	which uses this class's singleton object.
	But there are some cases where you might need to use this class. <br/>
	Examples:<br/>
	- When you want to run an action where the target is different from a CCNode.<br/>
	- When you want to pause / resume the actions<br/> */
	export class ActionManager {		
		/** If the target is already present, then the action will be added to the existing target.
		If the target is not present, a new instance of this target will be created either paused or not, and the action will be added to the newly created target.
		When the target is paused, the queued actions won't be 'ticked'. */
		addAction(action : cc.Action, target : cc.Node, paused : boolean) : void;		
		/** Removes all actions from all the targets. */
		removeAllActions() : void;		
		/** All the actions that belongs to the target will be removed. */
		removeAllActionsFromTarget(target : any, forceDelete : boolean) : void;		
		removeAction(action : cc.Action) : void;		
		removeActionByTag(tag : number, target : any) : void;		
		getActionByTag(tag : number, target : any) : cc.Action;		
		/** Composable actions are counted as 1 action. <br/>
		Example: <br/>
		- If you are running 1 Sequence of 7 actions, it will return 1. <br/>
		- If you are running 7 Sequences of 2 actions, it will return 7. */
		numberOfRunningActionsInTarget(target : any) : number;		
		pauseTarget(target : any) : void;		
		resumeTarget(target : any) : void;		
		/** Pauses all running actions, returning a list of targets whose actions were paused. */
		pauseAllRunningActions() : any[];		
		/** Resume a set of targets (convenience function to reverse a pauseAllRunningActions or pauseTargets call) */
		resumeTargets(targetsToResume : any[]) : void;		
		/** Pause a set of targets */
		pauseTargets(targetsToPause : any[]) : void;		
		/** because it uses this, so it can not be static */
		purgeSharedManager() : void;		
		update(dt : number) : void;	
	}	
	/** <p>
	   ATTENTION: USE cc.director INSTEAD OF cc.Director.<br/>
	   cc.director is a singleton object which manage your game's logic flow.<br/>
	   Since the cc.director is a singleton, you don't need to call any constructor or create functions,<br/>
	   the standard way to use it is by calling:<br/>
	     - cc.director.methodName(); <br/>
	
	   It creates and handle the main Window and manages how and when to execute the Scenes.<br/>
	   <br/>
	   The cc.director is also responsible for:<br/>
	     - initializing the OpenGL context<br/>
	     - setting the OpenGL pixel format (default on is RGB565)<br/>
	     - setting the OpenGL pixel format (default on is RGB565)<br/>
	     - setting the OpenGL buffer depth (default one is 0-bit)<br/>
	- setting the color for clear screen (default one is BLACK)<br/>
	     - setting the projection (default one is 3D)<br/>
	     - setting the orientation (default one is Portrait)<br/>
	     <br/>
	   <br/>
	   The cc.director also sets the default OpenGL context:<br/>
	     - GL_TEXTURE_2D is enabled<br/>
	     - GL_VERTEX_ARRAY is enabled<br/>
	     - GL_COLOR_ARRAY is enabled<br/>
	     - GL_TEXTURE_COORD_ARRAY is enabled<br/>
	</p>
	<p>
	  cc.director also synchronizes timers with the refresh rate of the display.<br/>
	  Features and Limitations:<br/>
	     - Scheduled timers & drawing are synchronizes with the refresh rate of the display<br/>
	     - Only supports animation intervals of 1/60 1/30 & 1/15<br/>
	</p> */
	export class Director {		
		/** Converts a view coordinate to an WebGL coordinate<br/>
		Useful to convert (multi) touches coordinates to the current layout (portrait or landscape)<br/>
		Implementation can be found in CCDirectorWebGL. */
		convertToGL(uiPoint : Vec2) : Vec2;		
		/** Converts an WebGL coordinate to a view coordinate<br/>
		Useful to convert node points to window points for calls such as glScissor<br/>
		Implementation can be found in CCDirectorWebGL. */
		convertToUI(glPoint : Vec2) : Vec2;		
		/** Returns the size in pixels of the surface. It could be different than the screen size.<br/>
		High-res devices might have a higher surface size than the screen size. */
		getContentScaleFactor() : number;		
		/** This object will be visited after the main scene is visited.<br/>
		This object MUST implement the "visit" selector.<br/>
		Useful to hook a notification object. */
		getNotificationNode() : Node;		
		/** Returns the size of the WebGL view in points.<br/>
		It takes into account any possible rotation (device orientation) of the window. */
		getWinSize() : Size;		
		/** Returns the size of the OpenGL view in pixels.<br/>
		It takes into account any possible rotation (device orientation) of the window.<br/>
		On Mac winSize and winSizeInPixels return the same value. */
		getWinSizeInPixels() : Size;		
		/** Returns the visible size of the running scene. */
		getVisibleSize() : Size;		
		/** Returns the visible origin of the running scene. */
		getVisibleOrigin() : Vec2;		
		/** Returns the z eye, only available in WebGL mode. */
		getZEye() : number;		
		/** Pause the director's ticker */
		pause() : void;		
		/** Suspends the execution of the running scene, pushing it on the stack of suspended scenes.<br/>
		The new scene will be executed.<br/>
		Try to avoid big stacks of pushed scenes to reduce memory allocation.<br/>
		ONLY call it if there is a running scene. */
		pushScene(scene : Scene) : void;		
		/** Run a scene. Replaces the running scene with a new one or enter the first scene. */
		runScene(scene : Scene) : void;		
		/** Loads the scene by its name. */
		loadScene(sceneName : string, onLaunched? : Function) : boolean;		
		/** Resume director after pause, if the current scene is not paused, nothing will happen. */
		resume() : void;		
		/** Enables or disables WebGL depth test.<br/>
		Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js */
		setDepthTest(on : boolean) : void;		
		/** set color for clear screen.<br/>
		Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js */
		setClearColor(clearColor : Color) : void;		
		/** Sets the view, where everything is rendered, do not call this function.<br/>
		Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js. */
		setOpenGLView(openGLView : EGLView) : void;		
		/** Sets an OpenGL projection.<br/>
		Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js. */
		setProjection(projection : number) : void;		
		/** Update the view port.<br/>
		Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js. */
		setViewport() : void;		
		/** Get the CCEGLView, where everything is rendered.<br/>
		Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js. */
		getOpenGLView() : EGLView;		
		/** Sets an OpenGL projection.<br/>
		Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js. */
		getProjection() : number;		
		/** Enables/disables OpenGL alpha blending.<br/>
		Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js. */
		setAlphaBlending(on : boolean) : void;		
		/** Returns whether or not the replaced scene will receive the cleanup message.<br>
		If the new scene is pushed, then the old scene won't receive the "cleanup" message.<br/>
		If the new scene replaces the old one, the it will receive the "cleanup" message. */
		isSendCleanupToScene() : boolean;		
		/** Returns current running Scene. Director can only run one Scene at the time. */
		getRunningScene() : Scene;		
		/** Returns current running Scene. Director can only run one Scene at the time. */
		getScene() : Scene;		
		/** Returns the FPS value. */
		getAnimationInterval() : number;		
		/** Returns whether or not to display the FPS informations. */
		isDisplayStats() : boolean;		
		/** Sets whether display the FPS on the bottom-left corner. */
		setDisplayStats(displayStats : boolean) : void;		
		/** Returns seconds per frame. */
		getSecondsPerFrame() : number;		
		/** Returns whether next delta time equals to zero */
		isNextDeltaTimeZero() : boolean;		
		/** Returns whether or not the Director is paused */
		isPaused() : boolean;		
		/** Returns how many frames were called since the director started */
		getTotalFrames() : number;		
		/** Returns the cc.Scheduler associated with this director. */
		getScheduler() : Scheduler;		
		/** Sets the cc.Scheduler associated with this director. */
		setScheduler(scheduler : Scheduler) : void;		
		/** Returns the cc.ActionManager associated with this director. */
		getActionManager() : ActionManager;		
		/** Sets the cc.ActionManager associated with this director. */
		setActionManager(actionManager : ActionManager) : void;		
		/** Returns the cc.AnimationManager associated with this director. */
		getAnimationManager() : AnimationManager;		
		/** Returns the delta time since last frame. */
		getDeltaTime() : number;	
	}	
	/** An object to boot the game. */
	export class game {		
		/** The outer frame of the game canvas, parent of cc.container. */
		frame : any;		
		/** The container of game canvas, equals to cc.container. */
		container : any;		
		/** The canvas of the game, equals to cc._canvas. */
		canvas : any;		
		/** Config of game */
		config : any;		
		/** Callback when the scripts of engine have been load. */
		onStart() : void;		
		/** Callback when game exits. */
		onStop() : void;		
		/** Set frameRate of game. */
		setFrameRate(frameRate : number) : void;		
		/** Run the game frame by frame. */
		step() : void;		
		/** Pause the game. */
		pause() : void;		
		/** Resume the game from pause. */
		resume() : void;		
		/** Check whether the game is paused. */
		isPaused() : boolean;		
		/** Restart game. */
		restart() : void;		
		/** Prepare game. */
		prepare(cb : Function) : void;		
		/** Run game with configuration object and onStart function. */
		run(config? : any|Function, onStart? : Function) : void;		
		/** Add a persistent root node to the game, the persistent node won't be destroyed during scene transition */
		addPersistRootNode(node : Node) : void;		
		/** Remove a persistent root node */
		removePersistRootNode(node : Node) : void;		
		/** Check whether the node is a persistent root node */
		isPersistRootNode(node : Node) : boolean;	
	}	
	/** Class of all entities in Fireball scenes. */
	export class Node extends _BaseNode {		
		/** The local active state of this node. */
		active : boolean;		
		/** Indicates whether this node is active in the scene. */
		activeInHierarchy : boolean;		
		/** Returns the component of supplied type if the node has one attached, null if it doesn't.
		You can also get component in the node by passing in the name of the script. */
		getComponent(typeOrClassName : Function|string) : Component;		
		/** Adds a component class to the node. You can also add component to entity by passing in the name of the script. */
		addComponent(typeOrClassName : Function|string) : Component;		
		/** Removes a component identified by the given name or removes the component object given.
		You can also use component.destroy() if you already have the reference. */
		removeComponent(component : string|Function|Component) : void;		
		/** Register an callback of a specific event type on Node.
		Use this method to register touch or mouse event permit propagation based on scene graph,
		you can propagate the event to the parents or swallow it by calling stopPropagation on the event.
		It's the recommended way to register touch/mouse event for Node,
		please do not use cc.eventManager directly for Node. */
		on(type : string, callback: (param: Event) => void, target? : any) : Function;		
		/** Executes an action, and returns the action that is executed.<br/>
		The node becomes the action's target. Refer to cc.Action's getTarget()
		Calling runAction while the node is not active won't have any effect */
		runAction(action : cc.Action) : cc.Action;		
		/** Stops and removes all actions from the running action list . */
		stopAllActions() : void;		
		/** Stops and removes an action from the running action list. */
		stopAction(action : cc.Action) : void;		
		/** Removes an action from the running action list by its tag. */
		stopActionByTag(tag : number) : void;		
		/** Returns an action from the running action list by its tag. */
		getActionByTag(tag : number) : cc.Action;		
		/** Composable actions are counted as 1 action. Example:<br/>
		If you are running 1 Sequence of 7 actions, it will return 1. <br/>
		If you are running 7 Sequences of 2 actions, it will return 7.</p> */
		getNumberOfRunningActions() : number;	
	}	
	/** Class for scene handling. */
	export class Scene extends Asset {		
		constructor();	
	}	
	/** A list double-linked list used for "updates with priority" */
	export class ListEntry {	
	}	
	/** A update entry list */
	export class HashUpdateEntry {	
	}	
	/** Hash Element used for "selectors with interval" */
	export class HashTimerEntry {	
	}	
	/** Light weight timer */
	export class Timer {	
	}	
	/** <p>
	   Scheduler is responsible of triggering the scheduled callbacks.<br/>
	   You should not use NSTimer. Instead use this class.<br/>
	   <br/>
	   There are 2 different types of callbacks (selectors):<br/>
	      - update callback: the 'update' callback will be called every frame. You can customize the priority.<br/>
	      - custom callback: A custom callback will be called every frame, or with a custom interval of time<br/>
	      <br/>
	   The 'custom selectors' should be avoided when possible. It is faster, and consumes less memory to use the 'update callback'. *
	</p> */
	export class Scheduler {		
		/** <p>
		   Modifies the time of all scheduled callbacks.<br/>
		   You can use this property to create a 'slow motion' or 'fast forward' effect.<br/>
		   Default is 1.0. To create a 'slow motion' effect, use values below 1.0.<br/>
		   To create a 'fast forward' effect, use values higher than 1.0.<br/> */
		setTimeScale(timeScale : number) : void;		
		/** Returns time scale of scheduler. */
		getTimeScale() : number;		
		/** 'update' the scheduler. (You should NEVER call this method, unless you know what you are doing.) */
		update(dt : number) : void;		
		/** <p>
		  The scheduled method will be called every 'interval' seconds.</br>
		  If paused is YES, then it won't be called until it is resumed.<br/>
		  If 'interval' is 0, it will be called every frame, but if so, it recommended to use 'scheduleUpdateForTarget:' instead.<br/>
		  If the callback function is already scheduled, then only the interval parameter will be updated without re-scheduling it again.<br/>
		  repeat let the action be repeated repeat + 1 times, use cc.REPEAT_FOREVER to let the action run continuously<br/>
		  delay is the amount of time the action will wait before it'll start<br/>
		</p> */
		scheduleCallbackForTarget(target : _Class, callback_fn : Function, interval : number, repeat : number, delay : number, paused : boolean) : void;		
		/** The schedule */
		schedule(callback : Function, target : _Class, interval : number, repeat : number, delay : number, paused : boolean, key : number) : void;		
		/** <p>
		 Pause all selectors from all targets.<br/>
		 You should NEVER call this method, unless you know what you are doing.
		</p> */
		pauseAllTargets() : void;		
		/** Pause all selectors from all targets with a minimum priority. <br/>
		You should only call this with kCCPriorityNonSystemMin or higher. */
		pauseAllTargetsWithMinPriority(minPriority : number) : void;		
		/** Resume selectors on a set of targets.<br/>
		This can be useful for undoing a call to pauseAllCallbacks. */
		resumeTargets(targetsToResume : any[]) : void;		
		/** <p>
		   Pauses the target.<br/>
		   All scheduled selectors/update for a given target won't be 'ticked' until the target is resumed.<br/>
		   If the target is not present, nothing happens.
		</p> */
		pauseTarget(target : _Class) : void;		
		/** Resumes the target.<br/>
		The 'target' will be unpaused, so all schedule selectors/update will be 'ticked' again.<br/>
		If the target is not present, nothing happens. */
		resumeTarget(target : _Class) : void;		
		/** Returns whether or not the target is paused */
		isTargetPaused(target : _Class) : boolean;		
		/** <p>
		   Schedules the 'update' callback_fn for a given target with a given priority.<br/>
		   The 'update' callback_fn will be called every frame.<br/>
		   The lower the priority, the earlier it is called.
		</p> */
		scheduleUpdateForTarget(target : _Class, priority : number, paused : boolean) : void;		
		/** <p>
		  Unschedule a callback function for a given target.<br/>
		  If you want to unschedule the "update", use unscheudleUpdateForTarget.
		</p> */
		unscheduleCallbackForTarget(target : _Class, callback : Function) : void;		
		/** Unschedules the update callback function for a given target */
		unscheduleUpdateForTarget(target : _Class) : void;		
		/** Unschedules all function callbacks for a given target. This also includes the "update" callback function. */
		unscheduleAllCallbacksForTarget(target : _Class) : void;		
		/** <p>
		    Unschedules all function callbacks from all targets. <br/>
		    You should NEVER call this method, unless you know what you are doing.
		</p> */
		unscheduleAllCallbacks() : void;		
		/** <p>
		   Unschedules all function callbacks from all targets with a minimum priority.<br/>
		   You should only call this with kCCPriorityNonSystemMin or higher.
		</p> */
		unscheduleAllCallbacksWithMinPriority(minPriority : number) : void;		
		/** Priority level reserved for system services. */
		PRIORITY_SYSTEM : number;	
	}	
	/** <p>
	 cc.pool is a singleton object serves as an object cache pool.<br/>
	 It can helps you to improve your game performance for objects which need frequent release and recreate operations<br/>
	 Some common use case is :<br/>
	     1. Bullets in game (die very soon, massive creation and recreation, no side effect on other objects)<br/>
	     2. Blocks in candy crash (massive creation and recreation)<br/>
	     etc...
	</p> */
	export class pool {		
		/** Put the obj in pool. */
		putInPool(obj : any) : void;		
		/** Check if this kind of obj has already in pool. */
		hasObject(objClass : any) : boolean;		
		/** Remove the obj if you want to delete it. */
		removeObject() : void;		
		/** Get the obj from pool. */
		getFromPool() : any;		
		/** Remove all objs in pool and reset the pool. */
		drainAllPools() : void;	
	}	
	/** EventTarget is an object to which an event is dispatched when something has occurred.
	Entity are the most common event targets, but other objects can be event targets too.
	
	Event targets are an important part of the Fireball event model.
	The event target serves as the focal point for how events flow through the scene graph.
	When an event such as a mouse click or a keypress occurs, Fireball dispatches an event object
	into the event flow from the root of the hierarchy. The event object then makes its way through
	the scene graph until it reaches the event target, at which point it begins its return trip through
	the scene graph. This round-trip journey to the event target is conceptually divided into three phases:
	- The capture phase comprises the journey from the root to the last node before the event target's node
	- The target phase comprises only the event target node
	- The bubbling phase comprises any subsequent nodes encountered on the return trip to the root of the tree
	See also: http://www.w3.org/TR/DOM-Level-3-Events/#event-flow
	
	Event targets can implement the following methods:
	 - _getCapturingTargets
	 - _getBubblingTargets */
	export class EventTarget {		
		/** Register an callback of a specific event type on the EventTarget.
		This method is merely an alias to addEventListener. */
		on(type : string, callback: (param: Event) => void, target? : any, useCapture? : boolean) : Function;		
		/** Removes the callback previously registered with the same type, callback, target and or useCapture.
		This method is merely an alias to removeEventListener. */
		off(type : string, callback : Function, target? : any, useCapture? : boolean) : void;		
		/** Removes all callbacks previously registered with the same target. */
		targetOff(target : any) : void;		
		/** Register an callback of a specific event type on the EventTarget, the callback will remove itself after the first time it is triggered. */
		once(type : string, callback: (param: Event) => void, target? : any, useCapture? : boolean) : void;		
		/** Dispatches an event into the event flow. The event target is the EventTarget object upon which the dispatchEvent() method is called. */
		dispatchEvent(event : Event) : boolean;		
		/** Send an event to this object directly, this method will not propagate the event to any other objects.
		The event will be created from the supplied message, you can get the "detail" argument from event.detail. */
		emit(message : string, detail? : any) : void;		
		/** Get whether the target is active for events.
		The name is for avoiding conflict with user defined functions.
		
		Subclasses can override this method to make event target active or inactive. */
		_isTargetActive(type : string) : boolean;		
		/** Get all the targets listening to the supplied type of event in the target's capturing phase.
		The capturing phase comprises the journey from the root to the last node BEFORE the event target's node.
		The result should save in the array parameter, and MUST SORT from child nodes to parent nodes.
		
		Subclasses can override this method to make event propagable. */
		_getCapturingTargets(type : string, array : any[]) : void;		
		/** Get all the targets listening to the supplied type of event in the target's bubbling phase.
		The bubbling phase comprises any SUBSEQUENT nodes encountered on the return trip to the root of the tree.
		The result should save in the array parameter, and MUST SORT from child nodes to parent nodes.
		
		Subclasses can override this method to make event propagable. */
		_getBubblingTargets(type : string, array : any[]) : void;	
	}	
	/** Base class of all kinds of events. */
	export class Event {		
		constructor();		
		Event(type : string, bubbles? : boolean) : Event;		
		/** The name of the event (case-sensitive), e.g. "click", "fire", or "submit". */
		type : string;		
		/** A reference to the target to which the event was originally dispatched. */
		bubbles : any;		
		/** A reference to the target to which the event was originally dispatched. */
		target : any;		
		/** A reference to the currently registered target for the event. */
		currentTarget : any;		
		/** Indicates which phase of the event flow is currently being evaluated.
		Returns an integer value represented by 4 constants:
		 - Event.NONE = 0
		 - Event.CAPTURING_PHASE = 1
		 - Event.AT_TARGET = 2
		 - Event.BUBBLING_PHASE = 3
		The phases are explained in the [section 3.1, Event dispatch and DOM event flow]
		(http://www.w3.org/TR/DOM-Level-3-Events/#event-flow), of the DOM Level 3 Events specification. */
		eventPhase : number;		
		/** Reset the event for being stored in the object pool. */
		unuse() : string;		
		/** Reuse the event for being used again by the object pool. */
		reuse() : string;		
		/** If invoked when the cancelable attribute value is true, signals to the operation that caused event to be dispatched that it needs to be canceled. */
		preventDefault() : void;		
		/** Stops propagation for current event. */
		stopPropagation() : void;		
		/** Stops propagation for current event immediately,
		the event won't even be dispatched to the listeners attached in the current target. */
		stopPropagationImmediate() : void;		
		/** Checks whether the event has been stopped. */
		isStopped() : boolean;		
		/** <p>
		    Gets current target of the event                                                            <br/>
		    note: It only be available when the event listener is associated with node.                <br/>
		         It returns 0 when the listener is associated with fixed priority.
		</p> */
		getCurrentTarget() : Node;		
		/** Gets the event type. */
		getType() : string;		
		/** Code for event without type. */
		NO_TYPE : string;		
		/** Events not currently dispatched are in this phase */
		NONE : number;		
		/** The capturing phase comprises the journey from the root to the last node before the event target's node
		see http://www.w3.org/TR/DOM-Level-3-Events/#event-flow */
		CAPTURING_PHASE : number;		
		/** The target phase comprises only the event target node
		see http://www.w3.org/TR/DOM-Level-3-Events/#event-flow */
		AT_TARGET : number;		
		/** The bubbling phase comprises any subsequent nodes encountered on the return trip to the root of the hierarchy
		see http://www.w3.org/TR/DOM-Level-3-Events/#event-flow */
		BUBBLING_PHASE : number;	
	}	
	/** undefined */
	export class Animation extends CCComponent {		
		/** Animation will play the default clip when start game */
		defaultClip : AnimationClip;		
		/** Current played clip */
		currentClip : AnimationClip;		
		/** Whether the animation should auto play the default clip when start game. */
		playOnLoad : boolean;		
		/** Get all the clips used in this animation */
		getClips() : AnimationClip[];		
		/** Plays an animation. */
		play(name? : string, startTime? : number) : AnimationState;		
		/** Stops an animation named name. If no name is supplied then stops all playing animations that were started with this Animation.
		Stopping an animation also Rewinds it to the Start. */
		stop(name? : string) : void;		
		/** Pauses an animation named name. If no name is supplied then pauses all playing animations that were started with this Animation. */
		pause(name? : string) : void;		
		/** Resumes an animation named name. If no name is supplied then resumes all paused animations that were started with this Animation. */
		pause(name? : string) : void;		
		/** Make an animation named name go to the specified time. If no name is supplied then make all animations go to the specified time. */
		setCurrentTime(time? : number, name? : string) : void;		
		/** Returns the animation state named name. If no animation with the specified name, the function will return null. */
		getAnimationState(name : string) : AnimationState;		
		/** Adds a clip to the animation with name newName. If a clip with that name already exists it will be replaced with the new clip. */
		addClip(clip : AnimationClip, newName? : string) : AnimationState;		
		/** Remove clip from the animation list. This will remove the clip and any animation states based on it. */
		removeClip(clip : AnimationClip, force : boolean) : void;		
		/** Samples animations at the current state.
		This is useful when you explicitly want to set up some animation state, and sample it once. */
		sample() : void;	
	}	
	/** Audio Source. */
	export class AudioScource extends Component {		
		/** Is the audio source playing (Read Only) */
		isPlaying : boolean;		
		/** The clip of the audio source. */
		clip : AudioClip;		
		/** The volume of the audio source. */
		volume : number;		
		/** Is the audio source mute? */
		mute : boolean;		
		/** Is the audio source looping? */
		loop : boolean;		
		/** If set to true, the audio source will automatically start playing on onLoad. */
		playOnLoad : boolean;		
		/** Plays the clip. */
		play() : void;		
		/** Stops the clip */
		stop() : void;		
		/** Pause the clip. */
		pause() : void;		
		/** Resume the clip. */
		resume() : void;		
		/** Rewind playing music. */
		rewind() : void;	
	}	
	/** Button has 3 Transition types
	When Button state changed:
	 If Transition type is Button.Transition.NONE, Button will do nothing
	 If Transition type is Button.Transition.COLOR, Button will change target's color
	 If Transition type is Button.Transition.SPRITE, Button will change target Sprite's sprite
	
	Button will trigger 5 events:
	 Button.EVENT_TOUCH_DOWN
	 Button.EVENT_TOUCH_UP
	 Button.EVENT_HOVER_IN
	 Button.EVENT_HOVER_MOVE
	 Button.EVENT_HOVER_OUT */
	export class Button extends Component {		
		/** Whether the Button is disabled.
		If true, the Button will trigger event and do transition. */
		interactable : boolean;		
		/** Transition type */
		transition : Button.Transition;		
		/** Normal state color */
		normalColor : cc.Color;		
		/** Pressed state color */
		pressedColor : cc.Color;		
		/** Hover state color */
		hoverColor : cc.Color;		
		/** Disabled state color */
		disabledColor : cc.Color;		
		/** Color transition duration */
		duration : number;		
		/** Normal state sprite */
		normalSprite : cc.SpriteFrame;		
		/** Pressed state sprite */
		pressedSprite : cc.SpriteFrame;		
		/** Hover state sprite */
		hoverSprite : cc.SpriteFrame;		
		/** Disabled state sprite */
		disabledSprite : cc.SpriteFrame;		
		/** Transition target.
		When Button state changed:
		 If Transition type is Button.Transition.NONE, Button will do nothing
		 If Transition type is Button.Transition.COLOR, Button will change target's color
		 If Transition type is Button.Transition.SPRITE, Button will change target Sprite's sprite */
		target : cc.Node;		
		/** If Button is clicked, it will trigger event's handler */
		clickEvents : cc.Component.EventHandler[];	
	}	
	/** !#zh: 作为 UI 根节点，为所有子节点提供视窗四边的位置信息以供对齐，另外提供屏幕适配策略接口，方便从编辑器设置。
	注：由于本节点的尺寸会跟随屏幕拉伸，所以 anchorPoint 只支持 (0.5, 0.5)，否则适配不同屏幕时坐标会有偏差。 */
	export class Canvas extends Component {		
		/** Current active canvas, the scene should only have one active canvas at the same time. */
		instance : Canvas;		
		/** The desigin resolution for current scene. */
		designResolution : cc.Size;		
		/** !#zh: 是否优先将设计分辨率高度撑满视图高度 */
		fitHeight : boolean;		
		/** !#zh: 是否优先将设计分辨率宽度撑满视图宽度 */
		fitWidth : boolean;	
	}	
	/** Base class for everything attached to Node(Entity).
	
	NOTE: Not allowed to use construction parameters for Component's subclasses,
	      because Component is created by the engine. */
	export class Component extends Object {		
		constructor();		
		/** The node this component is attached to. A component is always attached to a node. */
		node : Node;		
		/** The uuid for editor */
		uuid : string;		
		/** indicates whether this component is enabled or not. */
		enabled : boolean;		
		/** indicates whether this component is enabled and its entity is also active in the hierarchy. */
		enabledInHierarchy : boolean;		
		_isOnLoadCalled : boolean;		
		/** Update is called every frame, if the Component is enabled. */
		update() : void;		
		/** LateUpdate is called every frame, if the Component is enabled. */
		lateUpdate() : void;		
		/** When attaching to an active entity or its entity first activated */
		onLoad() : void;		
		/** Called before all scripts' update if the Component is enabled */
		start() : void;		
		/** Called when this component becomes enabled and its entity becomes active */
		onEnable() : void;		
		/** Called when this component becomes disabled or its entity becomes inactive */
		onDisable() : void;		
		/** Called when this component will be destroyed. */
		onDestroy() : void;		
		onFocusInEditor() : void;		
		onLostFocusInEditor() : void;		
		/** Adds a component class to the entity. You can also add component to entity by passing in the name of the
		script. */
		addComponent(typeOrName : Function|string) : Component;		
		/** Returns the component of supplied type if the entity has one attached, null if it doesn't. You can also get
		component in the entity by passing in the name of the script. */
		getComponent(typeOrName : Function|string) : Component;		
		/** <p>Schedules a custom selector.         <br/>
		If the selector is already scheduled, then the interval parameter will be updated without scheduling it again.</p> */
		schedule(callback : Function, interval? : number, repeat? : number, delay? : number) : void;		
		/** Schedules a callback function that runs only once, with a delay of 0 or larger */
		scheduleOnce(callback : Function, delay? : number) : void;		
		/** Unschedules a custom callback function. */
		unschedule(callback_fn : Function) : void;		
		/** <p>unschedule all scheduled callback functions: custom callback functions, and the 'update' callback function.<br/>
		Actions are not affected by this method.</p> */
		unscheduleAllCallbacks() : void;	
	}	
	/** Component in scene graph.
	This is the base class for components which will attach a node to the cocos2d scene graph.
	
	You should override:
	- _createSgNode */
	export class _ComponentInSG extends Component {	
	}	
	/** cc.EditBox is a component for inputing text, you can use it to gather small amounts of text from users. */
	export class EditBox extends _ComponentInSG {		
		/** Input string of EditBox. */
		string : string;		
		/** The background image of EditBox. */
		backGroundImage : cc.SpriteFrame;		
		/** The return key type of EditBox.
		Note: it is meaningless for web platforms and desktop platforms. */
		returnType : EditBox.KeyboardReturnType;		
		/** Set the input flags that are to be applied to the EditBox. */
		inputFlag : EditBox.InputFlag;		
		/** Set the input mode of the edit box.
		If you pass ANY, it will create a multiline EditBox. */
		inputMode : EditBox.InputMode;		
		/** Font size of the input text. */
		fontSize : number;		
		/** Font color of the input text. */
		fontColor : cc.Color;		
		/** The display text of placeHolder. */
		placeHolder : string;		
		/** The font size of placeHolder. */
		placeHolderFontSize : number;		
		/** The font color of placeHolder. */
		placeHolderFontColor : cc.Color;		
		/** The maximize input length of EditBox. */
		maxLength : number;		
		/** The event handler to be called when EditBox began to edit text. */
		editingDidBegin : cc.Component.EventHandler;		
		/** The event handler to be called when EditBox text changes. */
		textChanged : cc.Component.EventHandler;		
		/** The event handler to be called when EditBox edit ends. */
		editingDidEnd : cc.Component.EventHandler;	
	}	
	/** undefined */
	export class Label extends _ComponentInSG {		
		/** Content string of label */
		string : string;		
		/** Horizontal Alignment of label */
		horizontalAlign : cc.TextAlignment;		
		/** Vertical Alignment of label */
		verticalAlign : cc.VerticalTextAlignment;		
		/** Font size of label */
		fontSize : number;		
		/** Overflow of label */
		overFlow : Label.Overflow;		
		/** Whether auto wrap label when string width is large than label width */
		enableWrapText : boolean;		
		/** The font URL of label. */
		file : URL;		
		/** Whether use system font name or not. */
		isSystemFontUsed : boolean;		
		/** The horizontal alignment of label. */
		HorizontalAlign : cc.TextAlignment;		
		/** The vertical alignment of label. */
		VerticalAlign : cc.VerticalTextAlignment;		
		/** Label overflow type, currently three types are supported: Clamp, Shrink and ResizeHeight. */
		Overflow : Overflow;	
	}	
	/** The Layout is a container component, use it to arrange child elements easily. */
	export class Layout extends Component {		
		/** The layout type. */
		layoutType : Layout.Type;		
		/** The are three resize types for Layout.
		None, resize Container and resize children. */
		resize : Layout.ResizeType;		
		/** The cell size for grid layout. */
		cellSize : cc.Size;		
		/** The start axis for grid layout. If you choose horizontal, then children will layout horizontally at first,
		and then break line on demand. Choose vertical if you want to layout vertically at first . */
		startAxis : Layout.AxisDirection;		
		/** The padding of layout, it only effect the layout in one direction. */
		padding : number;		
		/** The distance in x-axis between each element in layout. */
		spacingX : number;		
		/** The distance in y-axis between each element in layout. */
		spacingY : number;		
		/** Only take effect in Vertical layout mode.
		This option changes the start element's positioning. */
		verticalDirection : Layout.VerticalDirection;		
		/** Only take effect in Horizontal layout mode.
		This option changes the start element's positioning. */
		horizontalDirection : Layout.HorizontalDirection;	
	}	
	/** undefined */
	export class Mask extends Component {	
	}	
	/** Visual indicator of progress in some operation. Displays a bar to the user representing how far the operation has progressed */
	export class ProgressBar extends Component {		
		/** The targeted Sprite which will be changed progressively. */
		barSprite : cc.Sprite;		
		/** The progress mode, there are two modes supported now: horizontal and vertical. */
		mode : ProgressBar.Mode;		
		/** The total width or height of the bar sprite. */
		totalLength : number;		
		/** The current progress of the bar sprite. The valid value is between 0-1. */
		progress : number;		
		/** Whether reverse the progress direction of the bar sprite. */
		reverse : boolean;	
	}	
	/** The Scrollbar control allows the user to scroll an image or other view that is too large to see completely */
	export class Scrollbar extends Component {		
		/** The "handle" part of the scrollbar. */
		handle : cc.Sprite;		
		/** The direction of scrollbar. */
		direction : Scrollbar.Direction;		
		/** Whehter enable auto hide or not. */
		enableAutoHide : boolean;		
		/** The time to hide scrollbar when scroll finished.
		Note: This value is only useful when enableAutoHide is true. */
		autoHideTime : number;	
	}	
	/** Layout container for a view hierarchy that can be scrolled by the user,
	allowing it to be larger than the physical display. */
	export class ScrollView extends Component {		
		/** This is a reference to the UI element to be scrolled. */
		content : cc.Node;		
		/** Enable horizontal scroll. */
		horizontal : boolean;		
		/** Enable vertical scroll. */
		vertical : boolean;		
		/** When inertia is set, the content will continue to move when touch ended. */
		inertia : boolean;		
		/** It determines how quickly the content stop moving. A value of 1 will stop the movement immediately.
		A value of 0 will never stop the movement until it reaches to the boundary of scrollview. */
		brake : number;		
		/** When elastic is set, the content will be bounce back when move out of boundary. */
		elastic : boolean;		
		/** The elapse time of bouncing back. A value of 0 will bounce back immediately. */
		bounceDuration : number;		
		/** The horizontal scrollbar reference. */
		horizontalScrollBar : cc.Scrollbar;		
		/** The vertical scrollbar reference. */
		verticalScrollBar : cc.Scrollbar;		
		/** Scroll the content to the bottom boundary of ScrollView. */
		scrollToBottom(timeInSecond? : number, attenuated? : boolean) : void;		
		/** Scroll the content to the top boundary of ScrollView. */
		scrollToTop(timeInSecond? : number, attenuated? : boolean) : void;		
		/** Scroll the content to the left boundary of ScrollView. */
		scrollToLeft(timeInSecond? : number, attenuated? : boolean) : void;		
		/** Scroll the content to the right boundary of ScrollView. */
		scrollToRight(timeInSecond? : number, attenuated? : boolean) : void;		
		/** Scroll the content to the top left boundary of ScrollView. */
		scrollToTopLeft(timeInSecond? : number, attenuated? : boolean) : void;		
		/** Scroll the content to the top right boundary of ScrollView. */
		scrollToTopRight(timeInSecond? : number, attenuated? : boolean) : void;		
		/** Scroll the content to the bottom left boundary of ScrollView. */
		scrollToBottomLeft(timeInSecond? : number, attenuated? : boolean) : void;		
		/** Scroll the content to the bottom right boundary of ScrollView. */
		scrollToBottomRight(timeInSecond? : number, attenuated? : boolean) : void;		
		/** Scroll the content to the horizontal percent position  of ScrollView. */
		scrollToPercentHorizontal(percent : number, timeInSecond? : number, attenuated? : boolean) : void;		
		/** Scroll the content to the percent position of ScrollView in any direction. */
		scrollTo(anchor : Vec2, timeInSecond? : number, attenuated? : boolean) : void;		
		/** Scroll the content to the vertical percent position of ScrollView. */
		scrollToPercentVertical(percent : number, timeInSecond? : number, attenuated? : boolean) : void;		
		/** Modify the content position. */
		setContentPosition(position : Vec2) : void;		
		/** Query the content's position in its parent space. */
		getContentPosition() : Position;	
	}	
	/** Renders a sprite in the scene. */
	export class Sprite extends _ComponentInSG {		
		/** The Sprite Atlas. */
		_atlas : SpriteAtlas;		
		/** The sprite frame of the sprite. */
		spriteFrame : SpriteFrame;		
		/** The sprite type. */
		type : SpriteType;		
		/** specify the rendering mode */
		isTrimmedMode : boolean;		
		/** specify the size tracing mode */
		sizeMode : SizeMode;		
		/** Sets whether the sprite is visible or not. */
		setVisible(visible : boolean) : void;		
		/** Toggle 9-slice feature.
		If Scale9Sprite is 9-slice disabled, the Scale9Sprite will rendered as a normal sprite. */
		setScale9Enabled(enabled : boolean) : void;		
		/** Query whether the Scale9Sprite is enable 9-slice or not. */
		isScale9Enabled() : boolean;		
		/** Initializes a 9-slice sprite with a texture file, a delimitation zone and
		with the specified cap insets.
		Once the sprite is created, you can then call its "setContentSize:" method
		to resize the sprite will all it's 9-slice goodness intract.
		It respects the anchorPoint too. */
		initWithFile(file : string, rect : Rect, capInsets : Rect) : void;		
		/** Initializes a 9-slice sprite with an sprite frame and with the specified
		cap insets.
		Once the sprite is created, you can then call its "setContentSize:" method
		to resize the sprite will all it's 9-slice goodness intract.
		It respects the anchorPoint too. */
		initWithSpriteFrame(spriteFrame : SpriteFrame, capInsets : Rect) : void;		
		/** Initializes a 9-slice sprite with an sprite frame name and with the specified
		cap insets.
		Once the sprite is created, you can then call its "setContentSize:" method
		to resize the sprite will all it's 9-slice goodness intract.
		It respects the anchorPoint too. */
		initWithSpriteFrameName(spriteFrameName : string, capInsets : Rect) : void;		
		/** Query the sprite's original size. */
		getOriginalSize() : Size;		
		/** Change the left sprite's cap inset. */
		setInsetLeft(leftInset : number) : void;		
		/** Query the left sprite's cap inset. */
		getInsetLeft() : number;		
		/** Change the top sprite's cap inset. */
		setInsetTop(topInset : number) : void;		
		/** Query the top sprite's cap inset. */
		getInsetTop() : number;		
		/** Change the right sprite's cap inset. */
		setInsetRight(rightInset : number) : void;		
		/** Query the right sprite's cap inset. */
		getInsetRight() : number;		
		/** Change the bottom sprite's cap inset. */
		setInsetBottom(bottomInset : number) : void;		
		getInsetBottom() : number;	
	}	
	/** Stores and manipulate the anchoring based on its parent.
	Widget are used for GUI but can also be used for other things. */
	export class Widget extends Component {		
		/** !#zh: 是否对齐上边 */
		isAlignTop : boolean;		
		/** !#zh: 是否垂直方向对齐中点，开启此项会将垂直方向其他对齐选项取消 */
		isAlignVerticalCenter : boolean;		
		/** !#zh: 是否对齐下边 */
		isAlignBottom : boolean;		
		/** !#zh: 是否对齐左边 */
		isAlignLeft : boolean;		
		/** !#zh: 是否水平方向对齐中点，开启此选项会将水平方向其他对齐选项取消 */
		isAlignHorizontalCenter : boolean;		
		/** !#zh: 是否对齐右边 */
		isAlignRight : boolean;		
		/** !#zh: 是否水平拉伸，当同时启用左右对齐时，将会水平拉伸，此时宽度设置无效（只读） */
		isStretchWidth : boolean;		
		/** !#zh: 是否垂直拉伸，当同时启用上下对齐时，将会垂直拉伸，此时高度设置无效（只读） */
		isStretchHeight : boolean;		
		/** !#zh: 本节点顶边和父节点顶边的距离，可填写负值，只有在 isAlignTop 开启时才有作用 */
		top : number;		
		/** !#zh: 本节点底边和父节点底边的距离，可填写负值，只有在 isAlignBottom 开启时才有作用 */
		bottom : number;		
		/** !#zh: 本节点左边和父节点左边的距离，可填写负值，只有在 isAlignLeft 开启时才有作用 */
		left : number;		
		/** !#zh: 本节点右边和父节点右边的距离，可填写负值，只有在 isAlignRight 开启时才有作用 */
		right : number;		
		/** If true, top is pixel margin, otherwise is percentage (0 - 1) margin relative to the parent's height */
		isAbsoluteTop : boolean;		
		/** If true, bottom is pixel margin, otherwise is percentage (0 - 1) margin relative to the parent's height */
		isAbsoluteBottom : boolean;		
		/** If true, left is pixel margin, otherwise is percentage (0 - 1) margin relative to the parent's width */
		isAbsoluteLeft : boolean;		
		/** If true, right is pixel margin, otherwise is percentage (0 - 1) margin relative to the parent's width */
		isAbsoluteRight : boolean;	
	}	
	/** <p>
	    The base class of event listener.                                                                        <br/>
	    If you need custom listener which with different callback, you need to inherit this class.               <br/>
	    For instance, you could refer to EventListenerAcceleration, EventListenerKeyboard,                       <br/>
	     EventListenerTouchOneByOne, EventListenerCustom.
	</p> */
	export class EventListener {		
		/** <p>Currently JavaScript Bindings (JSB), in some cases, needs to use retain and release. This is a bug in JSB,
		and the ugly workaround is to use retain/release. So, these 2 methods were added to be compatible with JSB.
		This is a hack, and should be removed once JSB fixes the retain/release bug<br/>
		You will need to retain an object if you created a listener and haven't added it any target node during the same frame.<br/>
		Otherwise, JSB's native autorelease pool will consider this object a useless one and release it directly,<br/>
		when you want to use it later, a "Invalid Native Object" error will be raised.<br/>
		The retain function can increase a reference count for the native object to avoid it being released,<br/>
		you need to manually invoke release function when you think this object is no longer needed, otherwise, there will be memory learks.<br/>
		retain and release function call should be paired in developer's game code.</p> */
		retain() : void;		
		/** <p>Currently JavaScript Bindings (JSB), in some cases, needs to use retain and release. This is a bug in JSB,
		and the ugly workaround is to use retain/release. So, these 2 methods were added to be compatible with JSB.
		This is a hack, and should be removed once JSB fixes the retain/release bug<br/>
		You will need to retain an object if you created a listener and haven't added it any target node during the same frame.<br/>
		Otherwise, JSB's native autorelease pool will consider this object a useless one and release it directly,<br/>
		when you want to use it later, a "Invalid Native Object" error will be raised.<br/>
		The retain function can increase a reference count for the native object to avoid it being released,<br/>
		you need to manually invoke release function when you think this object is no longer needed, otherwise, there will be memory learks.<br/>
		retain and release function call should be paired in developer's game code.</p> */
		release() : void;		
		/** Create a EventListener object by json object */
		create(argObj : any) : EventListener;	
	}	
	/** <p>
	 cc.eventManager is a singleton object which manages event listener subscriptions and event dispatching. <br/>
	                                                                                                             <br/>
	 The EventListener list is managed in such way so that event listeners can be added and removed          <br/>
	 while events are being dispatched.
	</p> */
	export class eventManager {		
		/** Pauses all listeners which are associated the specified target. */
		pauseTarget(node : Node, recursive? : boolean) : void;		
		/** Resumes all listeners which are associated the specified target. */
		resumeTarget(node : Node, recursive? : boolean) : void;		
		/** <p>
		Adds a event listener for a specified event.                                                                                                            <br/>
		if the parameter "nodeOrPriority" is a node, it means to add a event listener for a specified event with the priority of scene graph.                   <br/>
		if the parameter "nodeOrPriority" is a Number, it means to add a event listener for a specified event with the fixed priority.                          <br/>
		</p> */
		addListener(listener : EventListener|any, nodeOrPriority : Node|number) : EventListener;		
		/** Adds a Custom event listener. It will use a fixed priority of 1. */
		addCustomListener(eventName : string, callback : Function) : EventListener;		
		/** Remove a listener. */
		removeListener(listener : EventListener) : void;		
		/** Removes all listeners with the same event listener type or removes all listeners of a node */
		removeListeners(listenerType : number|Node, recursive? : boolean) : void;		
		/** Removes all custom listeners with the same event name */
		removeCustomListeners(customEventName : string) : void;		
		/** Removes all listeners */
		removeAllListeners() : void;		
		/** Sets listener's priority with fixed value. */
		setPriority(listener : EventListener, fixedPriority : number) : void;		
		/** Whether to enable dispatching events */
		setEnabled(enabled : boolean) : void;		
		/** Checks whether dispatching events is enabled */
		isEnabled() : boolean;		
		/** Dispatches the event, also removes all EventListeners marked for deletion from the event dispatcher list. */
		dispatchEvent(event: (type: string, bubbles: boolean) => void) : void;		
		/** Dispatches a Custom Event with a event name an optional user data */
		dispatchCustomEvent(eventName : string, optionalUserData : any) : void;	
	}	
	/** The touch event class */
	export class Touch {		
		/** Returns the current touch location in OpenGL coordinates. */
		getLocation() : Vec2;		
		/** Returns X axis location value. */
		getLocationX() : number;		
		/** Returns Y axis location value. */
		getLocationY() : number;		
		/** Returns the previous touch location in OpenGL coordinates. */
		getPreviousLocation() : Vec2;		
		/** Returns the start touch location in OpenGL coordinates. */
		getStartLocation() : Vec2;		
		/** Returns the delta distance from the previous touche to the current one in screen coordinates. */
		getDelta() : Vec2;		
		/** Returns the current touch location in screen coordinates. */
		getLocationInView() : Vec2;		
		/** Returns the previous touch location in screen coordinates. */
		getPreviousLocationInView() : Vec2;		
		/** Returns the start touch location in screen coordinates. */
		getStartLocationInView() : Vec2;		
		/** Returns the id of cc.Touch. */
		getID() : number;		
		/** Returns the id of cc.Touch. */
		getId() : number;		
		/** Sets information to touch. */
		setTouchInfo(id : number, x : number, y : number) : void;	
	}	
	/** Base class for handling assets used in Fireball. This class can be instantiate.
	
	You may want to override:
	- createNode
	- cc.Object._serialize
	- cc.Object._deserialize */
	export class Asset extends RawAsset {		
		constructor();		
		/** Returns the url of this asset's first raw file, if none of rawFile exists,
		it will returns the url of this serialized asset. */
		url : string;		
		/** Returns the url of this asset's raw files, if none of rawFile exists,
		it will returns an empty array. */
		urls : String[];		
		/** Create a new node using this asset in the scene.
		If this type of asset dont have its corresponding node type, this method should be null. */
		createNode(callback: (error: string, node: any) => void) : void;	
	}	
	/** Class for audio data handling. */
	export class AudioClip extends RawAsset {		
		constructor();	
	}	
	/** Class for BitmapFont handling. */
	export class BitmapFont extends RawAsset {		
		constructor();	
	}	
	/** Class for Font handling. */
	export class Font extends RawAsset {		
		constructor();	
	}	
	/** Class for prefab handling. */
	export class Prefab extends Asset {		
		constructor();	
	}	
	/** The base class for registering asset types.
	
	You may want to override:
	- createNode (static) */
	export class RawAsset extends CCObject {		
		/** Create a new node in the scene.
		If this type of asset dont have its corresponding node type, this method should be null. */
		createNodeByInfo(Info : any, callback: (error: string, node: any) => void) : void;	
	}	
	/** Class for script handling. */
	export class _Script extends Asset {		
		constructor();	
	}	
	/** Class for JavaScript handling. */
	export class _JavaScript extends Asset {		
		constructor();	
	}	
	/** Class for coffee script handling. */
	export class CoffeeScript extends Asset {		
		constructor();	
	}	
	/** Class for sprite animation asset handling. */
	export class SpriteAnimationAsset extends Asset {		
		constructor();		
		loop : boolean;		
		delay : number;	
	}	
	/** Class for sprite atlas handling. */
	export class SpriteAtlas extends RawAsset {		
		constructor();	
	}	
	/** Class for TTFFont handling. */
	export class TTFFont extends Asset {		
		constructor();	
	}	
	/** Class for text file. */
	export class TextAsset extends Asset {		
		constructor();	
	}	
	/** Class for tiled map asset handling. */
	export class TiledMapAsset extends RawAsset {		
		constructor();	
	}	
	/** <p>
	   A cc.SpriteFrame has:<br/>
	     - texture: A cc.Texture2D that will be used by the _ccsg.Sprite<br/>
	     - rectangle: A rectangle of the texture<br/>
	   <br/>
	   You can modify the frame of a _ccsg.Sprite by doing:<br/>
	</p> */
	export class SpriteFrame extends Asset {		
		constructor();		
		/** Constructor of SpriteFrame class */
		SpriteFrame(filename : string|Texture2D, rect : Rect, rotated? : boolean, offset? : Vec2, originalSize? : Size) : void;		
		/** Top border of the sprite */
		insetTop : number;		
		/** Bottom border of the sprite */
		insetBottom : number;		
		/** Left border of the sprite */
		insetLeft : number;		
		/** Right border of the sprite */
		insetRight : number;		
		/** Returns whether the texture have been loaded */
		textureLoaded() : boolean;		
		/** Add a event listener for texture loaded event. */
		addLoadedEventListener(callback : Function, target : any) : void;		
		/** Gets the rect of the frame in the texture. */
		getRectInPixels() : Rect;		
		/** Sets the rect of the frame in the texture. */
		setRectInPixels(rectInPixels : Rect) : void;		
		/** Returns whether the sprite frame is rotated in the texture. */
		isRotated() : boolean;		
		/** Set whether the sprite frame is rotated in the texture. */
		setRotated(bRotated : boolean) : void;		
		/** Returns the rect of the sprite frame in the texture. */
		getRect() : Rect;		
		/** Sets the rect of the sprite frame in the texture. */
		setRect(rect : Rect) : void;		
		/** Returns the offset of the sprite frame in the texture in pixel. */
		getOffsetInPixels() : Vec2;		
		/** Sets the offset of the sprite frame in the texture in pixel. */
		setOffsetInPixels(offsetInPixels : Vec2) : void;		
		/** Returns the original size of the trimmed image. */
		getOriginalSizeInPixels() : Size;		
		/** Sets the original size of the trimmed image. */
		setOriginalSizeInPixels(sizeInPixels : Size) : void;		
		/** Returns the original size of the trimmed image. */
		getOriginalSize() : Size;		
		/** Sets the original size of the trimmed image. */
		setOriginalSize(size : Size) : void;		
		/** Returns the texture of the frame. */
		getTexture() : Texture2D;		
		/** Sets the texture of the frame, the texture is retained automatically. */
		_refreshTexture(texture : Texture2D) : void;		
		/** Returns the offset of the frame in the texture. */
		getOffset() : Vec2;		
		/** Sets the offset of the frame in the texture. */
		setOffset(offsets : Vec2) : void;		
		/** Clone the sprite frame. */
		clone() : SpriteFrame;		
		/** Initializes SpriteFrame with Texture, rect, rotated, offset and originalSize in pixels.<br/>
		Please pass parameters to the constructor to initialize the sprite, do not call this function yourself. */
		initWithTexture(texture : string|cc.Texture2D, rect : Rect, rotated? : boolean, offset? : Vec2, originalSize? : Size) : boolean;		
		/** Copy the sprite frame */
		copyWithZone() : SpriteFrame;		
		/** Copy the sprite frame */
		copy() : cc.SpriteFrame;		
		/** <p>
		   Create a cc.SpriteFrame with a texture filename, rect, rotated, offset and originalSize in pixels.<br/>
		   The originalSize is the size in pixels of the frame before being trimmed.
		</p>
		since v3.0, please use new constructor {{#crossLink "SpriteFrame/SpriteFrame:method"}}SpriteFrame(){{/crossLink}} instead. */
		create(filename : string|cc.Texture2D, rect : cc.Rect, rotated : boolean, offset : cc.Vec2, originalSize : cc.Size) : cc.SpriteFrame;		
		/** deprecated since v3.0, please use new construction instead */
		createWithTexture() : void;	
	}	
	/** <p>
	cc.spriteFrameCache is a singleton that handles the loading of the sprite frames. It saves in a cache the sprite frames.<br/>
	<br/> */
	export class spriteFrameCache {		
		/** <p>
		  Adds multiple Sprite Frames from a plist or json file.<br/>
		  A texture will be loaded automatically. The texture name will composed by replacing the .plist or .json suffix with .png<br/>
		  If you want to use another texture, you should use the addSpriteFrames:texture method.<br/>
		</p> */
		addSpriteFrames(url : string, texture : HTMLImageElement|Texture2D|string) : void;		
		/** <p>
		 Adds an sprite frame with a given name.<br/>
		 If the name already exists, then the contents of the old name will be replaced with the new one.
		</p> */
		addSpriteFrame(frame: (filename: string|Texture2D, rect: Rect, rotated: boolean, offset: Vec2, originalSize: Size) => void, frameName : string) : void;		
		/** <p>
		  Purges the dictionary of loaded sprite frames.<br/>
		  Call this method if you receive the "Memory Warning".<br/>
		  In the short term: it will free some resources preventing your app from being killed.<br/>
		  In the medium term: it will allocate more resources.<br/>
		  In the long term: it will be the same.<br/>
		</p> */
		removeSpriteFrames() : void;		
		/** Deletes an sprite frame from the sprite frame cache. */
		removeSpriteFrameByName(name : string) : void;		
		/** <p>
		    Removes multiple Sprite Frames from a plist file.<br/>
		    Sprite Frames stored in this file will be removed.<br/>
		    It is convinient to call this method when a specific texture needs to be removed.<br/>
		</p> */
		removeSpriteFramesFromFile(url : string) : void;		
		/** <p>
		   Removes all Sprite Frames associated with the specified textures.<br/>
		   It is convenient to call this method when a specific texture needs to be removed.
		</p> */
		removeSpriteFramesFromTexture(texture : HTMLImageElement|HTMLCanvasElement|Texture2D) : void;		
		/** <p>
		  Returns an Sprite Frame that was previously added.<br/>
		  If the name is not found it will return nil.<br/>
		  You should retain the returned copy if you are going to use it.<br/>
		</p> */
		getSpriteFrame(name : string) : SpriteFrame;	
	}	
	/** The asset library which managing loading/unloading assets in project. */
	export class AssetLibrary {		
		queryAssetInfo(uuid : string, callback: (error: Error, url: string, raw: boolean, ctorInEditor: Function) => void) : void;		
		/** init the asset library */
		init(options : { libraryPath : string; mountPaths : any; rawAssets? : any; rawAssetsBase? : string; }) : void;	
	}	
	/** Key map for keyboard event */
	export enum KEY {		
		none = 0,
		back = 0,
		menu = 0,
		backspace = 0,
		tab = 0,
		enter = 0,
		shift = 0,
		ctrl = 0,
		alt = 0,
		pause = 0,
		capslock = 0,
		escape = 0,
		space = 0,
		pageup = 0,
		pagedown = 0,
		end = 0,
		home = 0,
		left = 0,
		up = 0,
		right = 0,
		down = 0,
		select = 0,
		insert = 0,
		Delete = 0,
		a = 0,
		b = 0,
		c = 0,
		d = 0,
		e = 0,
		f = 0,
		g = 0,
		h = 0,
		i = 0,
		j = 0,
		k = 0,
		l = 0,
		m = 0,
		n = 0,
		o = 0,
		p = 0,
		q = 0,
		r = 0,
		s = 0,
		t = 0,
		u = 0,
		v = 0,
		w = 0,
		x = 0,
		y = 0,
		z = 0,
		num0 = 0,
		num1 = 0,
		num2 = 0,
		num3 = 0,
		num4 = 0,
		num5 = 0,
		num6 = 0,
		num7 = 0,
		num8 = 0,
		num9 = 0,
		'*' = 0,
		'+' = 0,
		'-' = 0,
		numdel = 0,
		'/' = 0,
		f1 = 0,
		f2 = 0,
		f3 = 0,
		f4 = 0,
		f5 = 0,
		f6 = 0,
		f7 = 0,
		f8 = 0,
		f9 = 0,
		f10 = 0,
		f11 = 0,
		f12 = 0,
		numlock = 0,
		scrolllock = 0,
		';' = 0,
		semicolon = 0,
		equal = 0,
		'=' = 0,
		',' = 0,
		comma = 0,
		dash = 0,
		'.' = 0,
		period = 0,
		forwardslash = 0,
		grave = 0,
		'[' = 0,
		openbracket = 0,
		backslash = 0,
		']' = 0,
		closebracket = 0,
		quote = 0,
		dpadLeft = 0,
		dpadRight = 0,
		dpadUp = 0,
		dpadDown = 0,
		dpadCenter = 0,	
	}	
	/** cc.view is the singleton object which represents the game window.<br/>
	It's main task include: <br/>
	 - Apply the design resolution policy<br/>
	 - Provide interaction with the window, like resize event on web, retina display support, etc...<br/>
	 - Manage the game view port which can be different with the window<br/>
	 - Manage the content scale and translation<br/>
	<br/>
	Since the cc.view is a singleton, you don't need to call any constructor or create functions,<br/>
	the standard way to use it is by calling:<br/>
	 - cc.view.methodName(); <br/> */
	export class view {		
		/** <p>
		Sets view's target-densitydpi for android mobile browser. it can be set to:           <br/>
		  1. cc.DENSITYDPI_DEVICE, value is "device-dpi"                                      <br/>
		  2. cc.DENSITYDPI_HIGH, value is "high-dpi"  (default value)                         <br/>
		  3. cc.DENSITYDPI_MEDIUM, value is "medium-dpi" (browser's default value)            <br/>
		  4. cc.DENSITYDPI_LOW, value is "low-dpi"                                            <br/>
		  5. Custom value, e.g: "480"                                                         <br/>
		</p> */
		setTargetDensityDPI(densityDPI : string) : void;		
		/** Returns the current target-densitydpi value of cc.view. */
		getTargetDensityDPI() : string;		
		/** Sets whether resize canvas automatically when browser's size changed.<br/>
		Useful only on web. */
		resizeWithBrowserSize(enabled : boolean) : void;		
		/** Sets the callback function for cc.view's resize action,<br/>
		this callback will be invoked before applying resolution policy, <br/>
		so you can do any additional modifications within the callback.<br/>
		Useful only on web. */
		setResizeCallback(callback : Function|void) : void;		
		/** Sets whether the engine modify the "viewport" meta in your web page.<br/>
		It's enabled by default, we strongly suggest you not to disable it.<br/>
		And even when it's enabled, you can still set your own "viewport" meta, it won't be overridden<br/>
		Only useful on web */
		adjustViewPort(enabled : boolean) : void;		
		/** Retina support is enabled by default for Apple device but disabled for other devices,<br/>
		it takes effect only when you called setDesignResolutionPolicy<br/>
		Only useful on web */
		enableRetina(enabled : boolean) : void;		
		/** Check whether retina display is enabled.<br/>
		Only useful on web */
		isRetinaEnabled() : boolean;		
		/** If enabled, the application will try automatically to enter full screen mode on mobile devices<br/>
		You can pass true as parameter to enable it and disable it by passing false.<br/>
		Only useful on web */
		enableAutoFullScreen(enabled : boolean) : void;		
		/** Check whether auto full screen is enabled.<br/>
		Only useful on web */
		isAutoFullScreenEnabled() : boolean;		
		/** Get whether render system is ready(no matter opengl or canvas),<br/>
		this name is for the compatibility with cocos2d-x, subclass must implement this method. */
		isOpenGLReady() : boolean;		
		/** Open or close IME keyboard , subclass must implement this method. */
		setIMEKeyboardState(isOpen : boolean) : void;		
		/** Sets the resolution translate on EGLView. */
		setContentTranslateLeftTop(offsetLeft : number, offsetTop : number) : void;		
		/** Returns the resolution translate on EGLView */
		getContentTranslateLeftTop() : Size;		
		/** Not support on native.<br/>
		On web, it sets the size of the canvas. */
		setCanvasSize(width : number, height : number) : void;		
		/** Returns the canvas size of the view.<br/>
		On native platforms, it returns the screen size since the view is a fullscreen view.<br/>
		On web, it returns the size of the canvas element. */
		getCanvasSize() : Size;		
		/** Returns the frame size of the view.<br/>
		On native platforms, it returns the screen size since the view is a fullscreen view.<br/>
		On web, it returns the size of the canvas's outer DOM element. */
		getFrameSize() : Size;		
		/** On native, it sets the frame size of view.<br/>
		On web, it sets the size of the canvas's outer DOM element. */
		setFrameSize(width : number, height : number) : void;		
		/** Returns the visible area size of the view port. */
		getVisibleSize() : Size;		
		/** Returns the visible area size of the view port. */
		getVisibleSizeInPixel() : Size;		
		/** Returns the visible origin of the view port. */
		getVisibleOrigin() : Vec2;		
		/** Returns the visible origin of the view port. */
		getVisibleOriginInPixel() : Vec2;		
		/** Returns whether developer can set content's scale factor. */
		canSetContentScaleFactor() : boolean;		
		/** Returns the current resolution policy */
		getResolutionPolicy() : ResolutionPolicy;		
		/** Sets the current resolution policy */
		setResolutionPolicy(resolutionPolicy : ResolutionPolicy|number) : void;		
		/** Sets the resolution policy with designed view size in points.<br/>
		The resolution policy include: <br/>
		[1] ResolutionExactFit       Fill screen by stretch-to-fit: if the design resolution ratio of width to height is different from the screen resolution ratio, your game view will be stretched.<br/>
		[2] ResolutionNoBorder       Full screen without black border: if the design resolution ratio of width to height is different from the screen resolution ratio, two areas of your game view will be cut.<br/>
		[3] ResolutionShowAll        Full screen with black border: if the design resolution ratio of width to height is different from the screen resolution ratio, two black borders will be shown.<br/>
		[4] ResolutionFixedHeight    Scale the content's height to screen's height and proportionally scale its width<br/>
		[5] ResolutionFixedWidth     Scale the content's width to screen's width and proportionally scale its height<br/>
		[cc.ResolutionPolicy]        [Web only feature] Custom resolution policy, constructed by cc.ResolutionPolicy<br/> */
		setDesignResolutionSize(width : number, height : number, resolutionPolicy : ResolutionPolicy|number) : void;		
		/** Returns the designed size for the view.
		Default resolution size is the same as 'getFrameSize'. */
		getDesignResolutionSize() : Size;		
		/** Sets the container to desired pixel resolution and fit the game content to it.
		This function is very useful for adaptation in mobile browsers.
		In some HD android devices, the resolution is very high, but its browser performance may not be very good.
		In this case, enabling retina display is very costy and not suggested, and if retina is disabled, the image may be blurry.
		But this API can be helpful to set a desired pixel resolution which is in between.
		This API will do the following:
		    1. Set viewport's width to the desired width in pixel
		    2. Set body width to the exact pixel resolution
		    3. The resolution policy will be reset with designed view size in points. */
		setRealPixelResolution(width : number, height : number, resolutionPolicy : ResolutionPolicy|number) : void;		
		/** Sets view port rectangle with points. */
		setViewPortInPoints(x : number, y : number, w : number, h : number) : void;		
		/** Sets Scissor rectangle with points. */
		setScissorInPoints(x : number, y : number, w : number, h : number) : void;		
		/** Returns whether GL_SCISSOR_TEST is enable */
		isScissorEnabled() : boolean;		
		/** Returns the current scissor rectangle */
		getScissorRect() : Rect;		
		/** Sets the name of the view */
		setViewName(viewName : string) : void;		
		/** Returns the name of the view */
		getViewName() : string;		
		/** Returns the view port rectangle. */
		getViewPortRect() : Rect;		
		/** Returns scale factor of the horizontal direction (X axis). */
		getScaleX() : number;		
		/** Returns scale factor of the vertical direction (Y axis). */
		getScaleY() : number;		
		/** Returns device pixel ratio for retina display. */
		getDevicePixelRatio() : number;		
		/** Returns the real location in view for a translation based on a related position */
		convertToLocationInView(tx : number, ty : number, relatedPos : any) : Vec2;	
	}	
	/** <p>cc.ContainerStrategy class is the root strategy class of container's scale strategy,
	it controls the behavior of how to scale the cc.container and cc.game.canvas object</p> */
	export class ContainerStrategy {		
		/** Manipulation before appling the strategy */
		preApply(view : view) : void;		
		/** Function to apply this strategy */
		apply(view : view, designedResolution : Size) : void;		
		/** Manipulation after applying the strategy */
		postApply(view : view) : void;	
	}	
	/** <p>cc.ContentStrategy class is the root strategy class of content's scale strategy,
	it controls the behavior of how to scale the scene and setup the viewport for the game</p> */
	export class ContentStrategy {		
		/** Manipulation before applying the strategy */
		preApply(view : view) : void;		
		/** Function to apply this strategy
		The return value is {scale: [scaleX, scaleY], viewport: {cc.Rect}},
		The target view can then apply these value to itself, it's preferred not to modify directly its private variables */
		apply(view : view, designedResolution : Size) : any;		
		/** Manipulation after applying the strategy */
		postApply(view : view) : void;	
	}	
	/** undefined */
	export class EqualToFrame extends ContainerStrategy {	
	}	
	/** undefined */
	export class ProportionalToFrame extends ContainerStrategy {	
	}	
	/** undefined */
	export class EqualToWindow extends EqualToFrame {	
	}	
	/** undefined */
	export class ProportionalToWindow extends ProportionalToFrame {	
	}	
	/** undefined */
	export class OriginalContainer extends ContainerStrategy {	
	}	
	/** <p>cc.ResolutionPolicy class is the root strategy class of scale strategy,
	its main task is to maintain the compatibility with Cocos2d-x</p> */
	export class ResolutionPolicy {		
		ResolutionPolicy(containerStg : ContainerStrategy, contentStg : ContentStrategy) : void;		
		/** Manipulation before applying the resolution policy */
		preApply(view : view) : void;		
		/** Function to apply this resolution policy
		The return value is {scale: [scaleX, scaleY], viewport: {cc.Rect}},
		The target view can then apply these value to itself, it's preferred not to modify directly its private variables */
		apply(view : view, designedResolution : Size) : any;		
		/** Manipulation after appyling the strategy */
		postApply(view : view) : void;		
		/** Setup the container's scale strategy */
		setContainerStrategy(containerStg : ContainerStrategy) : void;		
		/** Setup the content's scale strategy */
		setContentStrategy(contentStg : ContentStrategy) : void;		
		/** The entire application is visible in the specified area without trying to preserve the original aspect ratio.<br/>
		Distortion can occur, and the application may appear stretched or compressed. */
		EXACT_FIT : number;		
		/** The entire application fills the specified area, without distortion but possibly with some cropping,<br/>
		while maintaining the original aspect ratio of the application. */
		NO_BORDER : number;		
		/** The entire application is visible in the specified area without distortion while maintaining the original<br/>
		aspect ratio of the application. Borders can appear on two sides of the application. */
		SHOW_ALL : number;		
		/** The application takes the height of the design resolution size and modifies the width of the internal<br/>
		canvas so that it fits the aspect ratio of the device<br/>
		no distortion will occur however you must make sure your application works on different<br/>
		aspect ratios */
		FIXED_HEIGHT : number;		
		/** The application takes the width of the design resolution size and modifies the height of the internal<br/>
		canvas so that it fits the aspect ratio of the device<br/>
		no distortion will occur however you must make sure your application works on different<br/>
		aspect ratios */
		FIXED_WIDTH : number;		
		/** Unknow policy */
		UNKNOWN : number;	
	}	
	/** Enum for UIOrientation. */
	export enum UIOrientation {		
		PORTRAIT = 0,
		LANDSCAPE_LEFT = 0,
		LANDSCAPE_RIGHT = 0,
		PORTRAIT_UPSIDE_DOWN = 0,	
	}	
	/** <p>
	 This class manages all events of input. include: touch, mouse, accelerometer, keyboard                                       <br/>
	</p> */
	export class inputManager {		
		handleTouchesBegin(touches : any[]) : void;		
		handleTouchesMove(touches : any[]) : void;		
		handleTouchesEnd(touches : any[]) : void;		
		handleTouchesCancel(touches : any[]) : void;		
		getSetOfTouchesEndOrCancel(touches : any[]) : any[];		
		getHTMLElementPosition(element : HTMLElement) : any;		
		getPreTouch(touch : Touch) : Touch;		
		setPreTouch(touch : Touch) : void;		
		getTouchByXY(tx : number, ty : number, pos : Vec2) : Touch;		
		getTouchByXY(location : Vec2, pos : Vec2, eventType : number) : Event.EventMouse;		
		getPointByEvent(event : Touch, pos : Vec2) : Vec2;		
		getTouchesByEvent(event : Touch, pos : Vec2) : any[];		
		registerSystemEvent(element : HTMLElement) : void;		
		update(dt : number) : void;	
	}	
	/** Loader for resource loading process. It's a singleton object. */
	export class loader {		
		/** Load js files.
		If the third parameter doesn't exist, then the baseDir turns to be "". */
		loadJs(baseDir? : string, jsList : any[], cb? : Function) : any;		
		/** Load js width loading image. */
		loadJsWithImg(baseDir? : string, jsList : any[], cb? : Function) : void;		
		/** Load a single resource as txt. */
		loadTxt(url : string, cb? : Function) : void;		
		/** Load a single resource as json. */
		loadJson(url : string, cb? : Function) : void;		
		/** Load a single image. */
		loadImg(url : string, option? : any, callback : Function) : Image;		
		/** Get url with basePath. */
		getUrl(basePath : string, url? : string) : any;		
		/** Load resources then call the callback. */
		load(resources : string, option? : Function, loadCallback? : Function|any) : AsyncPool;		
		/** <p>
		    Loads alias map from the contents of a filename.                                        <br/>
		                                                                                                                <br/> */
		loadAliases(url : string, callback? : Function) : void;		
		/** Register a resource loader into loader. */
		register(extNames : string, loader : Function) : void;		
		/** Get resource data by url. */
		getRes(url : string) : any;		
		/** Get aliase by url. */
		getAliase(url : string) : any;		
		/** Release the cache of resource by url. */
		release(url : string) : void;		
		/** Resource cache of all resources. */
		releaseAll() : void;	
	}	
	/** The base class of most of all the objects in Fireball. */
	export class Object {		
		constructor();		
		/** The name of the object. */
		name : string;		
		/** Indicates whether the object is not yet destroyed */
		isValid : boolean;		
		/** Destroy this Object, and release all its own references to other objects.
		
		After destroy, this CCObject is not usable any more.
		You can use cc.isValid(obj) (or obj.isValid if obj is non-nil) to check whether the object is destroyed before
		accessing it. */
		destroy() : boolean;		
		/** In fact, Object's "destroy" will not trigger the destruct operation in Firebal Editor.
		The destruct operation will be executed by Undo system later. */
		realDestroyInEditor() : void;	
	}	
	/** Bit mask that controls object states. */
	export class Flags {		
		/** The object will not be saved. */
		DontSave : number;		
		/** The object will not be saved when building a player. */
		EditorOnly : number;		
		/** Hide in game and hierarchy.
		This flag is readonly, it can only be used as an argument of scene.addEntity() or Entity.createWithFlags() */
		HideInGame : number;		
		/** This flag is readonly, it can only be used as an argument of scene.addEntity() or Entity.createWithFlags() */
		HideInEditor : number;		
		/** Hide in game view, hierarchy, and scene view... etc.
		This flag is readonly, it can only be used as an argument of scene.addEntity() or Entity.createWithFlags() */
		Hide : number;	
	}	
	/** The fullscreen API provides an easy way for web content to be presented using the user's entire screen.
	It's invalid on safari, QQbrowser and android browser */
	export class screen {		
		/** initialize */
		init() : void;		
		/** return true if it's full now. */
		fullScreen() : boolean;		
		/** change the screen to full mode. */
		requestFullScreen(element : Element, onFullScreenChange : Function) : void;		
		/** exit the full mode. */
		exitFullScreen() : boolean;		
		/** Automatically request full screen with a touch/click event */
		autoFullScreen(element : Element, onFullScreenChange : Function) : void;	
	}	
	/** System variables */
	export class sys {		
		/** English language code */
		LANGUAGE_ENGLISH : string;		
		/** Chinese language code */
		LANGUAGE_CHINESE : string;		
		/** French language code */
		LANGUAGE_FRENCH : string;		
		/** Italian language code */
		LANGUAGE_ITALIAN : string;		
		/** German language code */
		LANGUAGE_GERMAN : string;		
		/** Spanish language code */
		LANGUAGE_SPANISH : string;		
		/** Spanish language code */
		LANGUAGE_DUTCH : string;		
		/** Russian language code */
		LANGUAGE_RUSSIAN : string;		
		/** Korean language code */
		LANGUAGE_KOREAN : string;		
		/** Japanese language code */
		LANGUAGE_JAPANESE : string;		
		/** Hungarian language code */
		LANGUAGE_HUNGARIAN : string;		
		/** Portuguese language code */
		LANGUAGE_PORTUGUESE : string;		
		/** Arabic language code */
		LANGUAGE_ARABIC : string;		
		/** Norwegian language code */
		LANGUAGE_NORWEGIAN : string;		
		/** Polish language code */
		LANGUAGE_POLISH : string;		
		/** Unknown language code */
		LANGUAGE_UNKNOWN : string;		
		OS_IOS : string;		
		OS_ANDROID : string;		
		OS_WINDOWS : string;		
		OS_MARMALADE : string;		
		OS_LINUX : string;		
		OS_BADA : string;		
		OS_BLACKBERRY : string;		
		OS_OSX : string;		
		OS_WP8 : string;		
		OS_WINRT : string;		
		OS_UNKNOWN : string;		
		UNKNOWN : number;		
		WIN32 : number;		
		LINUX : number;		
		MACOS : number;		
		ANDROID : number;		
		IOS : number;		
		IPAD : number;		
		BLACKBERRY : number;		
		NACL : number;		
		EMSCRIPTEN : number;		
		TIZEN : number;		
		WINRT : number;		
		WP8 : number;		
		MOBILE_BROWSER : number;		
		DESKTOP_BROWSER : number;		
		/** Indicates whether executes in editor's window process (Electron's renderer context) */
		EDITOR_PAGE : number;		
		/** Indicates whether executes in editor's main process (Electron's browser context) */
		EDITOR_CORE : number;		
		/** BROWSER_TYPE_WECHAT */
		BROWSER_TYPE_WECHAT : string;		
		BROWSER_TYPE_ANDROID : string;		
		BROWSER_TYPE_IE : string;		
		BROWSER_TYPE_QQ : string;		
		BROWSER_TYPE_MOBILE_QQ : string;		
		BROWSER_TYPE_UC : string;		
		BROWSER_TYPE_360 : string;		
		BROWSER_TYPE_BAIDU_APP : string;		
		BROWSER_TYPE_BAIDU : string;		
		BROWSER_TYPE_MAXTHON : string;		
		BROWSER_TYPE_OPERA : string;		
		BROWSER_TYPE_OUPENG : string;		
		BROWSER_TYPE_MIUI : string;		
		BROWSER_TYPE_FIREFOX : string;		
		BROWSER_TYPE_SAFARI : string;		
		BROWSER_TYPE_CHROME : string;		
		BROWSER_TYPE_LIEBAO : string;		
		BROWSER_TYPE_QZONE : string;		
		BROWSER_TYPE_SOUGOU : string;		
		BROWSER_TYPE_UNKNOWN : string;		
		/** Is native ? This is set to be true in jsb auto. */
		isNative : boolean;		
		/** Is web browser ? */
		isBrowser : boolean;		
		/** Indicate whether system is mobile system */
		isMobile : boolean;		
		/** Indicate the running platform */
		platform : number;		
		/** Indicate the current language of the running system */
		language : string;		
		/** Indicate the running os name */
		os : string;		
		/** Indicate the running browser type */
		browserType : string;		
		/** Indicate the running browser version */
		browserVersion : number;		
		/** Indicate the real pixel resolution of the whole game window */
		windowPixelResolution : number;		
		/** cc.sys.localStorage is a local storage component. */
		localStorage : any;		
		/** The capabilities of the current platform */
		capabilities : any;		
		/** Forces the garbage collection, only available in JSB */
		garbageCollect() : void;		
		/** Dumps rooted objects, only available in JSB */
		dumpRoot() : void;		
		/** Restart the JS VM, only available in JSB */
		restartVM() : void;		
		/** Clean a script in the JS VM, only available in JSB */
		cleanScript(jsfile : string) : void;		
		/** Check whether an object is valid,
		In web engine, it will return true if the object exist
		In native engine, it will return true if the JS object and the correspond native object are both valid */
		isObjectValid(obj : any) : boolean;		
		/** Dump system informations */
		dump() : void;		
		/** Open a url in browser */
		openURL(url : string) : void;	
	}	
	/** cc.visibleRect is a singleton object which defines the actual visible rect of the current view,
	it should represent the same rect as cc.view.getViewportRect() */
	export class visibleRect {		
		/** initialize */
		init(visibleRect : Rect) : void;		
		/** Top left coordinate of the screen related to the game scene. */
		topLeft : Vec2;		
		/** Top right coordinate of the screen related to the game scene. */
		topRight : Vec2;		
		/** Top center coordinate of the screen related to the game scene. */
		top : Vec2;		
		/** Bottom left coordinate of the screen related to the game scene. */
		bottomLeft : Vec2;		
		/** Bottom right coordinate of the screen related to the game scene. */
		bottomRight : Vec2;		
		/** Bottom center coordinate of the screen related to the game scene. */
		bottom : Vec2;		
		/** Center coordinate of the screen related to the game scene. */
		center : Vec2;		
		/** Left center coordinate of the screen related to the game scene. */
		left : Vec2;		
		/** Right center coordinate of the screen related to the game scene. */
		right : Vec2;		
		/** Width of the screen. */
		width : number;		
		/** Height of the screen. */
		height : number;	
	}	
	/** undefined */
	export class Class {	
	}	
	/** The CallbacksHandler is an abstract class that can register and unregister callbacks by key.
	Subclasses should implement their own methods about how to invoke the callbacks. */
	export class _CallbacksHandler {		
		constructor();		
		add(key : string, callback : Function, target : any) : boolean;		
		/** Check if the specified key has any registered callback. If a callback is also specified,
		it will only return true if the callback is registered. */
		has(key : string, callback? : Function, target? : any) : boolean;		
		/** Removes all callbacks registered in a certain event type or all callbacks registered with a certain target */
		removeAll(key : string|any) : void;		
		remove(key : string, callback : Function, target : any) : boolean;	
	}	
	/** The callbacks invoker to handle and invoke callbacks by key */
	export class CallbacksInvoker extends _CallbacksHandler {		
		constructor();		
		invoke(key : string, p1? : any, p2? : any, p3? : any, p4? : any, p5? : any) : void;		
		invokeAndRemove(key : string, p1? : any, p2? : any, p3? : any, p4? : any, p5? : any) : void;		
		bindKey(key : string, remove? : boolean) : Function;	
	}	
	/** !#en Contains information collected during deserialization
	!#zh 包含反序列化时的一些信息 */
	export class Details {		
		constructor();		
		/** list of the depends assets' uuid */
		uuidList : String[];		
		/** the obj list whose field needs to load asset by uuid */
		uuidObjList : Object[];		
		/** the corresponding field name which referenced to the asset */
		uuidPropList : String[];		
		/** the corresponding field name which referenced to the raw object */
		rawProp : string;		
		reset() : void;		
		getUuidOf(obj : any, propName : string) : string;		
		assignAssetsBy(getter : Function) : boolean;		
		push(obj : any, propName : string, uuid : string) : void;	
	}	
	/** undefined */
	export class url {		
		/** Returns the url of raw assets. */
		raw(url : string) : string;		
		/** Returns the url of builtin raw assets. */
		builtinRaw(url : string) : string;	
	}	
	/** <p>
	This class allows to easily create OpenGL or Canvas 2D textures from images, text or raw data.                                    <br/>
	The created cc.Texture2D object will always have power-of-two dimensions.                                                <br/>
	Depending on how you create the cc.Texture2D object, the actual image area of the texture might be smaller than the texture dimensions <br/>
	 i.e. "contentSize" != (pixelsWide, pixelsHigh) and (maxS, maxT) != (1.0, 1.0).                                           <br/>
	Be aware that the content of the generated textures will be upside-down! </p> */
	export class Texture2D extends RawAsset {		
		/** Get width in pixels. */
		getPixelWidth() : number;		
		/** Get height of in pixels. */
		getPixelHeight() : number;		
		/** Get content size. */
		getContentSize() : Size;		
		/** Get content size in pixels. */
		getContentSizeInPixels() : Size;		
		/** Init with HTML element. */
		initWithElement(element : HTMLImageElement|HTMLCanvasElement) : void;		
		/** Intializes with a texture2d with data. */
		initWithData(data : any[], pixelFormat : number, pixelsWide : number, pixelsHigh : number, contentSize : Size) : boolean;		
		/** Initializes a texture from a UIImage object.
		Extensions to make it easy to create a CCTexture2D object from an image file.
		Note that RGBA type textures will have their alpha premultiplied - use the blending mode (gl.ONE, gl.ONE_MINUS_SRC_ALPHA). */
		initWithImage(uiImage : HTMLImageElement) : boolean;		
		/** HTMLElement Object getter. */
		getHtmlElementObj() : HTMLImageElement;		
		/** Check whether texture is loaded. */
		isLoaded() : boolean;		
		/** Handler of texture loaded event. */
		handleLoadedTexture(premultiplied? : boolean) : void;		
		/** Description of cc.Texture2D. */
		description() : string;		
		/** Release texture. */
		releaseTexture() : void;		
		/** Pixel format of the texture. */
		getPixelFormat() : number;		
		/** Whether or not the texture has their Alpha premultiplied,
		support only in WebGl rendering mode. */
		hasPremultipliedAlpha() : boolean;		
		/** Whether or not use mipmap, support only in WebGl rendering mode. */
		hasMipmaps() : boolean;		
		/** Sets the min filter, mag filter, wrap s and wrap t texture parameters. <br/>
		If the texture size is NPOT (non power of 2), then in can only use gl.CLAMP_TO_EDGE in gl.TEXTURE_WRAP_{S,T}. */
		setTexParameters(texParams : any|number, magFilter? : number, wrapS? : Texture2D.WrapMode, wrapT? : Texture2D.WrapMode) : void;		
		/** WebGLTexture Object. */
		name : WebGLTexture;		
		/** Pixel format of the texture. */
		pixelFormat : number;		
		/** Width in pixels. */
		pixelWidth : number;		
		/** Height in pixels. */
		pixelHeight : number;		
		/** Content width in points. */
		width : number;		
		/** Content height in points. */
		height : number;	
	}	
	/** <p>A class that implements a Texture Atlas. <br />
	Supported features: <br />
	The atlas file can be a PNG, JPG. <br />
	Quads can be updated in runtime <br />
	Quads can be added in runtime <br />
	Quads can be removed in runtime <br />
	Quads can be re-ordered in runtime <br />
	The TextureAtlas capacity can be increased or decreased in runtime.</p> */
	export class TextureAtlas {		
		constructor();		
		/** <p>Creates a TextureAtlas with an filename and with an initial capacity for Quads. <br />
		The TextureAtlas capacity can be increased in runtime. </p>
		Constructor of cc.TextureAtlas */
		TextureAtlas(fileName : string|Texture2D, capacity : number) : void;		
		/** Quantity of quads that are going to be drawn. */
		getTotalQuads() : number;		
		/** Quantity of quads that can be stored with the current texture atlas size. */
		getCapacity() : number;		
		/** Texture of the texture atlas. */
		getTexture() : Image;		
		/** Set texture for texture atlas. */
		setTexture(texture : Image) : void;		
		/** specify if the array buffer of the VBO needs to be updated. */
		setDirty(dirty : boolean) : void;		
		/** whether or not the array buffer of the VBO needs to be updated. */
		isDirty() : boolean;		
		/** Quads that are going to be rendered. */
		getQuads() : any[];		
		setQuads(quads : any[]) : void;		
		/** <p>Initializes a TextureAtlas with a filename and with a certain capacity for Quads.<br />
		The TextureAtlas capacity can be increased in runtime.<br />
		WARNING: Do not reinitialize the TextureAtlas because it will leak memory. </p> */
		initWithFile(file : string, capacity : number) : boolean;		
		/** <p>Initializes a TextureAtlas with a previously initialized Texture2D object, and<br />
		with an initial capacity for Quads.<br />
		The TextureAtlas capacity can be increased in runtime.<br />
		WARNING: Do not reinitialize the TextureAtlas because it will leak memory</p> */
		initWithTexture(texture : Image, capacity : number) : boolean;		
		/** <p>Updates a Quad (texture, vertex and color) at a certain index <br />
		index must be between 0 and the atlas capacity - 1 </p> */
		updateQuad(quad : V3F_C4B_T2F_Quad, index : number) : void;		
		/** <p>Inserts a Quad (texture, vertex and color) at a certain index<br />
		index must be between 0 and the atlas capacity - 1 </p> */
		insertQuad(quad : V3F_C4B_T2F_Quad, index : number) : void;		
		/** <p>
		     Inserts a c array of quads at a given index                                           <br />
		     index must be between 0 and the atlas capacity - 1                                    <br />
		     this method doesn't enlarge the array when amount + index > totalQuads                <br />
		</p> */
		insertQuads(quads : any[], index : number, amount : number) : void;		
		/** <p>Removes the quad that is located at a certain index and inserts it at a new index <br />
		This operation is faster than removing and inserting in a quad in 2 different steps</p> */
		insertQuadFromIndex(fromIndex : number, newIndex : number) : void;		
		/** <p>Removes a quad at a given index number.<br />
		The capacity remains the same, but the total number of quads to be drawn is reduced in 1 </p> */
		removeQuadAtIndex(index : number) : void;		
		/** Removes a given number of quads at a given index. */
		removeQuadsAtIndex(index : number, amount : number) : void;		
		/** <p>Removes all Quads. <br />
		The TextureAtlas capacity remains untouched. No memory is freed.<br />
		The total number of quads to be drawn will be 0</p> */
		removeAllQuads() : void;		
		/** <p>Resize the capacity of the CCTextureAtlas.<br />
		The new capacity can be lower or higher than the current one<br />
		It returns YES if the resize was successful. <br />
		If it fails to resize the capacity it will return NO with a new capacity of 0. <br />
		no used for js</p> */
		resizeCapacity(newCapacity : number) : boolean;		
		/** Used internally by CCParticleBatchNode                                    <br/>
		don't use this unless you know what you're doing. */
		increaseTotalQuadsWith(amount : number) : void;		
		/** Moves an amount of quads from oldIndex at newIndex. */
		moveQuadsFromIndex(oldIndex : number, amount : number, newIndex : number) : void;		
		/** Ensures that after a realloc quads are still empty                                <br/>
		Used internally by CCParticleBatchNode. */
		fillWithEmptyQuadsFromIndex(index : number, amount : number) : void;		
		/** <p>Draws n quads from an index (offset). <br />
		n + start can't be greater than the capacity of the atlas</p> */
		drawNumberOfQuads(n : number, start : number) : void;		
		/** Indicates whether or not the array buffer of the VBO needs to be updated. */
		dirty : boolean;		
		/** Image texture for cc.TextureAtlas. */
		texture : Image;		
		/** Quantity of quads that can be stored with the current texture atlas size. */
		capacity : number;		
		/** Quantity of quads that are going to be drawn. */
		totalQuads : number;		
		/** Quads that are going to be rendered. */
		quads : any[];	
	}	
	/** cc.textureCache is a singleton object, it's the global cache for cc.Texture2D */
	export class textureCache {		
		/** Description */
		description() : string;		
		/** Returns an already created texture. Returns null if the texture doesn't exist. */
		textureForKey(textureKeyName : string) : Texture2D;		
		/** Returns an already created texture. Returns null if the texture doesn't exist. */
		getTextureForKey(textureKeyName : string) : Texture2D;		
		getKeyByTexture(texture : Image) : string;		
		getTextureColors(texture : Image) : any[];		
		/** <p>Purges the dictionary of loaded textures. <br />
		Call this method if you receive the "Memory Warning"  <br />
		In the short term: it will free some resources preventing your app from being killed  <br />
		In the medium term: it will allocate more resources <br />
		In the long term: it will be the same</p> */
		removeAllTextures() : void;		
		/** Deletes a texture from the cache given a texture. */
		removeTexture(texture : Image) : void;		
		/** Deletes a texture from the cache given a its key name. */
		removeTextureForKey(textureKeyName : string) : void;		
		/** <p>Returns a Texture2D object given an file image <br />
		If the file image was not previously loaded, it will create a new Texture2D <br />
		 object and it will return it. It will use the filename as a key.<br />
		Otherwise it will return a reference of a previously loaded image. <br />
		Supported image extensions: .png, .jpg, .gif</p> */
		addImage(url : string, cb : Function, target : any) : Texture2D;		
		/** Cache the image data. */
		cacheImage(path : string, texture : Image|HTMLImageElement|HTMLCanvasElement) : void;		
		/** <p>Returns a Texture2D object given an UIImage image<br />
		If the image was not previously loaded, it will create a new Texture2D object and it will return it.<br />
		Otherwise it will return a reference of a previously loaded image<br />
		The "key" parameter will be used as the "key" for the cache.<br />
		If "key" is null, then a new texture will be created each time.</p> */
		addUIImage(image : HTMLImageElement|HTMLCanvasElement, key : string) : Texture2D;	
	}	
	/** <p>cc.AffineTransform class represent an affine transform matrix. It's composed basically by translation, rotation, scale transformations.<br/>
	Please do not use its constructor directly, use cc.affineTransformMake alias function instead.
	</p> */
	export class AffineTransform {		
		/** Create a cc.AffineTransform object with all contents in the matrix */
		affineTransformMake(a : number, b : number, c : number, d : number, tx : number, ty : number) : AffineTransform;		
		/** Clone a cc.AffineTransform object from the specified transform */
		affineTransformClone(t : AffineTransform) : AffineTransform;		
		/** Apply the affine transformation on a point. */
		pointApplyAffineTransform(point : Vec2|number, transOrY : AffineTransform|number, t : AffineTransform) : Vec2;		
		/** Apply the affine transformation on a size. */
		sizeApplyAffineTransform(size : Size, t : AffineTransform) : Size;		
		/** <p>Create a identity transformation matrix: <br/>
		[ 1, 0, 0, <br/>
		  0, 1, 0 ]</p> */
		affineTransformMakeIdentity() : AffineTransform;		
		/** <p>Create a identity transformation matrix: <br/>
		[ 1, 0, 0, <br/>
		  0, 1, 0 ]</p> */
		affineTransformIdentity() : AffineTransform;		
		/** Apply the affine transformation on a rect. */
		rectApplyAffineTransform(rect : Rect, anAffineTransform : AffineTransform) : Rect;		
		/** Create a new affine transformation with a base transformation matrix and a translation based on it. */
		affineTransformTranslate(t : AffineTransform, tx : number, ty : number) : AffineTransform;		
		/** Create a new affine transformation with a base transformation matrix and a scale based on it. */
		affineTransformScale(t : AffineTransform, sx : number, sy : number) : AffineTransform;		
		/** Create a new affine transformation with a base transformation matrix and a rotation based on it. */
		affineTransformRotate(aTransform : AffineTransform, anAngle : number) : AffineTransform;		
		/** Concatenate a transform matrix to another and return the result:<br/>
		t' = t1 * t2 */
		affineTransformConcat(t1 : AffineTransform, t2 : AffineTransform) : AffineTransform;		
		/** Concatenate a transform matrix to another<br/>
		The results are reflected in the first matrix.<br/>
		t' = t1 * t2 */
		affineTransformConcatIn(t1 : cc.AffineTransform, t2 : cc.AffineTransform) : cc.AffineTransform;		
		/** Return true if an affine transform equals to another, false otherwise. */
		affineTransformEqualToTransform(t1 : AffineTransform, t2 : AffineTransform) : boolean;		
		/** Get the invert transform of an AffineTransform object. */
		affineTransformInvert(t : AffineTransform) : AffineTransform;	
	}	
	/** Representation of RGBA colors.
	
	Each color component is a floating point value with a range from 0 to 1.
	
	You can also use the convenience method <% crosslink cc.Color cc.Color %> to create a new Color. */
	export class Color extends ValueType {		
		constructor(r : number, g : number, b : number, a : number);		
		WHITE : Color;		
		BLACK : Color;		
		TRANSPARENT : Color;		
		GRAY : Color;		
		RED : Color;		
		GREEN : Color;		
		BLUE : Color;		
		YELLOW : Color;		
		ORANGE : Color;		
		CYAN : Color;		
		MAGENTA : Color;		
		/** Clone a new color from the current color. */
		clone() : Color;		
		equals(other : Color) : boolean;		
		lerp(to : Color, ratio : number, out? : Color) : Color;		
		toString() : string;		
		setR(red : number) : Color;		
		setG(green : number) : Color;		
		setB(blue : number) : Color;		
		setA(alpha : number) : Color;		
		toCSS(opt : string) : string;		
		/** Clamp this color to make all components between 0 to 1. */
		clamp() : void;		
		fromHEX(hexString : string) : Color;		
		toHEX(fmt : string) : string;		
		/** Convert to 24bit rgb value. */
		toRGBValue() : number;		
		fromHSV(h : number, s : number, v : number) : Color;		
		toHSV() : any;		
		rgb2hsv(r : number, g : number, b : number) : any;		
		hsv2rgb(h : number, s : number, v : number) : any;		
		/** The convenience method to create a new <% crosslink cc.Color color %>
		Alpha channel is optional. Default value is 255. */
		color(r? : number, g? : number, b? : number, a? : number) : Color;		
		/** returns true if both ccColor3B are equal. Otherwise it returns false. */
		colorEqual(color1 : Color, color2 : Color) : boolean;		
		/** convert a string of color for style to Color.
		e.g. "#ff06ff"  to : cc.color(255,6,255) */
		hexToColor(hex : string) : Color;		
		/** convert Color to a string of color for style.
		e.g.  cc.color(255,6,255)  to : "#ff06ff" */
		colorToHex(color : Color) : string;	
	}	
	/** A 2D rectangle defined by x, y position and width, height.
	
	see {% crosslink cc.Rect cc.rect %} */
	export class Rect extends ValueType {		
		constructor(x : number, y : number, w : number, h : number);		
		/** Creates a rectangle from two coordinate values. */
		fromMinMax(v1 : Vec2, v2 : Vec2) : Rect;		
		/** Checks if rect contains. */
		contain(a : Rect, b : Rect) : number;		
		clone() : Rect;		
		equals(other : Rect) : boolean;		
		lerp(to : Rect, ratio : number, out? : Rect) : Rect;		
		toString() : string;		
		xMin : number;		
		yMin : number;		
		xMax : number;		
		yMax : number;		
		center : number;		
		size : Size;		
		intersects(rect : Rect) : void;		
		/** Returns true if the point inside this rectangle. */
		contains(point : Vec2) : void;		
		/** Returns true if the other rect totally inside this rectangle. */
		containsRect(rect : Rect) : void;		
		/** The convenience method to create a new Rect. */
		rect(x? : Number[]|number, y? : number, w? : number, h? : number) : Rect;		
		/** Check whether a rect's value equals to another. */
		rectEqualToRect(rect1 : Rect, rect2 : Rect) : boolean;		
		/** Check whether the rect1 contains rect2. */
		rectContainsRect(rect1 : Rect, rect2 : Rect) : boolean;		
		/** Returns the rightmost x-value of a rect. */
		rectGetMaxX(rect : Rect) : number;		
		/** Return the midpoint x-value of a rect. */
		rectGetMidX(rect : Rect) : number;		
		/** Returns the leftmost x-value of a rect. */
		rectGetMinX(rect : Rect) : number;		
		/** Return the topmost y-value of a rect. */
		rectGetMaxY(rect : Rect) : number;		
		/** Return the midpoint y-value of `rect'. */
		rectGetMidY(rect : Rect) : number;		
		/** Return the bottommost y-value of a rect. */
		rectGetMinY(rect : Rect) : number;		
		/** Check whether a rect contains a point. */
		rectContainsPoint(rect : Rect, point : Vec2) : boolean;		
		/** Check whether a rect intersect with another. */
		rectIntersectsRect(rectA : Rect, rectB : Rect) : boolean;		
		/** Check whether a rect overlaps another. */
		rectOverlapsRect(rectA : Rect, rectB : Rect) : boolean;		
		/** Returns the smallest rectangle that contains the two source rectangles. */
		rectUnion(rectA : Rect, rectB : Rect) : Rect;		
		/** Returns the overlapping portion of 2 rectangles. */
		rectUnion(rectA : Rect, rectB : Rect) : Rect;	
	}	
	/** cc.Size is the class for size object, please do not use its constructor to create sizes, use cc.size() alias function instead.
	It will be deprecated soon, please use cc.Vec2 instead */
	export class Size {		
		/** return a Size object with width = 0 and height = 0. */
		ZERO : Size;		
		clone() : Size;		
		equals(other : Size) : boolean;		
		lerp(to : Rect, ratio : number, out? : Size) : Size;		
		toString() : string;		
		/** Helper function that creates a cc.Size.
		Please use cc.p or cc.v2 instead, it will soon replace cc.Size. */
		size(w : number|Size, h : number) : Size;		
		/** Check whether a point's value equals to another. */
		sizeEqualToSize(size1 : Size, size2 : Size) : boolean;	
	}	
	/** the device accelerometer reports values for each axis in units of g-force. */
	export class Acceleration {		
		constructor();		
		Acceleration(x : number, y : number, z : number, timestamp : number) : Acceleration;	
	}	
	/** Blend Function used for textures. */
	export class BlendFunc {		
		constructor();		
		BlendFunc(src1 : number, dst1 : number) : BlendFunc;		
		blendFuncDisable() : BlendFunc;	
	}	
	/** Common usage:
	
	var fontDef = new cc.FontDefinition();
	fontDef.fontName = "Arial";
	fontDef.fontSize = 12;
	...
	
	OR using inline definition usefull for constructor injection
	
	var fontDef = new cc.FontDefinition({
	 fontName: "Arial",
	 fontSize: 12
	}); */
	export class FontDefinition {		
		constructor();		
		FontDefinition(properties : any) : FontDefinition;	
	}	
	/** Enum for text alignment */
	export enum TextAlignment {		
		LEFT = 0,
		CENTER = 0,
		RIGHT = 0,	
	}	
	/** Enum for vertical text alignment */
	export enum VerticalTextAlignment {		
		TOP = 0,
		CENTER = 0,
		BOTTOM = 0,	
	}	
	/** undefined */
	export class WebGLColor {		
		constructor();		
		WebGLColor(r : number, g : number, b : number, a : number, arrayBuffer : any[], offset : number) : WebGLColor;		
		BYTES_PER_ELEMENT : number;	
	}	
	/** undefined */
	export class Vertex2F {		
		Vertex2F(x : number, y : number, arrayBuffer : any[], offset : number) : Vertex2F;		
		BYTES_PER_ELEMENT : number;	
	}	
	/** undefined */
	export class Vertex3F {		
		constructor();		
		Vertex3F(x : number, y : number, z : number, arrayBuffer : any[], offset : number) : Vertex3F;		
		BYTES_PER_ELEMENT : number;	
	}	
	/** undefined */
	export class Tex2F {		
		constructor();		
		Tex2F(u : number, v : number, arrayBuffer : any[], offset : number) : Tex2F;		
		BYTES_PER_ELEMENT : number;	
	}	
	/** undefined */
	export class Quad2 {		
		constructor();		
		Quad2(tl: (x: number, y: number, arrayBuffer: any[], offset: number) => void, tr: (x: number, y: number, arrayBuffer: any[], offset: number) => void, bl: (x: number, y: number, arrayBuffer: any[], offset: number) => void, br: (x: number, y: number, arrayBuffer: any[], offset: number) => void, arrayBuffer : any[], offset : number) : Quad2;		
		BYTES_PER_ELEMENT : number;	
	}	
	/** A 3D Quad. 4 * 3 floats */
	export class Quad3 {		
		Quad3(bl1: (x: number, y: number, z: number, arrayBuffer: any[], offset: number) => void, br1: (x: number, y: number, z: number, arrayBuffer: any[], offset: number) => void, tl1: (x: number, y: number, z: number, arrayBuffer: any[], offset: number) => void, tr1: (x: number, y: number, z: number, arrayBuffer: any[], offset: number) => void) : Quad3;	
	}	
	/** undefined */
	export class V3F_C4B_T2F {		
		constructor();		
		V3F_C4B_T2F(vertices: (x: number, y: number, z: number, arrayBuffer: any[], offset: number) => void, colors : Color, texCoords: (u: number, v: number, arrayBuffer: any[], offset: number) => void, arrayBuffer : any[], offset : number) : V3F_C4B_T2F;		
		BYTES_PER_ELEMENT() : void;	
	}	
	/** undefined */
	export class V3F_C4B_T2F_Quad {		
		constructor();		
		V3F_C4B_T2F_Quad(tl: (vertices: Vertex3F, colors: Color, texCoords: Tex2F, arrayBuffer: any[], offset: number) => void, bl: (vertices: Vertex3F, colors: Color, texCoords: Tex2F, arrayBuffer: any[], offset: number) => void, tr: (vertices: Vertex3F, colors: Color, texCoords: Tex2F, arrayBuffer: any[], offset: number) => void, br: (vertices: Vertex3F, colors: Color, texCoords: Tex2F, arrayBuffer: any[], offset: number) => void, arrayBuffer : any[], offset : number) : V3F_C4B_T2F_Quad;		
		BYTES_PER_ELEMENT : number;	
	}	
	/** undefined */
	export class V2F_C4B_T2F {		
		constructor();		
		V2F_C4B_T2F(vertices: (x: number, y: number, arrayBuffer: any[], offset: number) => void, colors : Color, texCoords: (u: number, v: number, arrayBuffer: any[], offset: number) => void, arrayBuffer : any[], offset : number) : V2F_C4B_T2F;		
		BYTES_PER_ELEMENT : number;	
	}	
	/** undefined */
	export class V2F_C4B_T2F_Triangle {		
		constructor();		
		V2F_C4B_T2F_Triangle(a: (vertices: Vertex2F, colors: Color, texCoords: Tex2F, arrayBuffer: any[], offset: number) => void, b: (vertices: Vertex2F, colors: Color, texCoords: Tex2F, arrayBuffer: any[], offset: number) => void, c: (vertices: Vertex2F, colors: Color, texCoords: Tex2F, arrayBuffer: any[], offset: number) => void, arrayBuffer : any[], offset : number) : V2F_C4B_T2F_Triangle;	
	}	
	/** The base class of all value types. */
	export class ValueType {		
		constructor();		
		/** !#en This method returns an exact copy of current value.
		!#zh 克隆当前值，该方法返回一个新对象，新对象的值和原对象相等。 */
		clone() : ValueType;		
		/** Compares this object with the other one. */
		equals(other : ValueType) : boolean;		
		toString() : string;		
		/** Linearly interpolates between this value to to value by ratio which is in the range [0, 1].
		When ratio = 0 returns this. When ratio = 1 return to. When ratio = 0.5 returns the average of this and to. */
		lerp(to : ValueType, ratio : number) : ValueType;	
	}	
	/** Representation of 2D vectors and points.
	
	see {{#crossLink Vec2 }}cc.Vec2{{/crossLink}} */
	export class Vec2 extends ValueType {		
		constructor();		
		/** Constructor */
		Vec2(x? : number, y? : number) : void;		
		/** !#en clone a Vec2 value
		!#zh 克隆一个 Vec2 值 */
		clone() : Vec2;		
		set(newValue: (x: number, y: number) => void) : Vec2;		
		equals(other: (x: number, y: number) => void) : boolean;		
		toString() : string;		
		lerp(to: (x: number, y: number) => void, ratio : number, out: (x: number, y: number) => void) : Vec2;		
		/** Adds this vector. If you want to save result to another vector, use add() instead. */
		addSelf(vector: (x: number, y: number) => void) : Vec2;		
		/** Adds two vectors, and returns the new result. */
		add(vector: (x: number, y: number) => void, out: (x: number, y: number) => void) : Vec2;		
		/** Subtracts one vector from this. If you want to save result to another vector, use sub() instead. */
		subSelf(vector: (x: number, y: number) => void) : Vec2;		
		/** Subtracts one vector from this, and returns the new result. */
		sub(vector: (x: number, y: number) => void, out: (x: number, y: number) => void) : Vec2;		
		/** Multiplies this by a number. If you want to save result to another vector, use mul() instead. */
		mulSelf(num : number) : Vec2;		
		/** Multiplies by a number, and returns the new result. */
		mul(num : number, out: (x: number, y: number) => void) : Vec2;		
		/** Multiplies two vectors. */
		scaleSelf(vector: (x: number, y: number) => void) : Vec2;		
		/** Multiplies two vectors, and returns the new result. */
		scale(vector: (x: number, y: number) => void, out: (x: number, y: number) => void) : Vec2;		
		/** Divides by a number. If you want to save result to another vector, use div() instead. */
		divSelf(vector: (x: number, y: number) => void) : Vec2;		
		/** Divides by a number, and returns the new result. */
		div(vector: (x: number, y: number) => void, out: (x: number, y: number) => void) : Vec2;		
		/** Negates the components. If you want to save result to another vector, use neg() instead. */
		negSelf() : Vec2;		
		/** Negates the components, and returns the new result. */
		neg(out: (x: number, y: number) => void) : Vec2;		
		/** Dot product */
		dot(vector: (x: number, y: number) => void) : number;		
		/** Cross product */
		cross(vector: (x: number, y: number) => void) : number;		
		/** Returns the length of this vector. */
		mag() : number;		
		/** Returns the squared length of this vector. */
		magSqr() : number;		
		/** Make the length of this vector to 1. */
		normalizeSelf() : Vec2;		
		/** Returns this vector with a magnitude of 1.
		
		Note that the current vector is unchanged and a new normalized vector is returned. If you want to normalize the current vector, use normalizeSelf function. */
		normalize(out: (x: number, y: number) => void) : Vec2;		
		/** Get angle in radian between this and vector */
		angle(vector: (x: number, y: number) => void) : number;		
		/** Get angle in radian between this and vector with direction */
		signAngle(vector: (x: number, y: number) => void) : number;		
		/** rotate */
		rotate(radians : number, out: (x: number, y: number) => void) : Vec2;		
		/** rotate self */
		rotateSelf(radians : number) : Vec2;		
		/** return a Vec2 object with x = 1 and y = 1 */
		ONE : Vec2;		
		/** return a Vec2 object with x = 0 and y = 0 */
		ZERO : Vec2;		
		/** return a Vec2 object with x = 0 and y = 1 */
		up : Vec2;		
		/** return a Vec2 object with x = 1 and y = 0 */
		RIGHT : Vec2;	
	}	
	/** A base node for CCNode and CCEScene, it will:
	- provide the same api with origin cocos2d rendering node (SGNode)
	- maintains properties of the internal SGNode
	- retain and release the SGNode
	- serialize datas for SGNode (but SGNode itself will not being serialized)
	- notifications if some properties changed
	- define some interfaces shares between CCNode and CCEScene */
	export class _BaseNode extends Object {		
		/** Name of node */
		name : string;		
		/** The parent of the node. */
		parent : Node;		
		/** The uuid for editor, will be stripped before building project */
		uuid : string;		
		/** Skew x */
		skewX : number;		
		/** Skew y */
		skewY : number;		
		/** Z order in depth which stands for the drawing order. */
		zIndex : number;		
		/** Rotation of node */
		rotation : number;		
		/** Rotation on x axis */
		rotationX : number;		
		/** Rotation on y axis */
		rotationY : number;		
		/** Scale on x axis */
		scaleX : number;		
		/** Scale on y axis */
		scaleY : number;		
		/** x axis position of node. */
		x : number;		
		/** y axis position of node. */
		y : number;		
		/** All children nodes */
		children : Node[];		
		/** All children nodes. */
		childrenCount : number;		
		/** Anchor point's position on x axis. */
		anchorX : number;		
		/** Anchor point's position on y axis. */
		anchorY : number;		
		/** Width of node. */
		width : number;		
		/** Height of node. */
		height : number;		
		/** Indicate whether ignore the anchor point property for positioning. */
		ignoreAnchor : boolean;		
		/** Tag of node. */
		tag : number;		
		/** Opacity of node, default value is 255. */
		opacity : number;		
		/** Indicate whether node's opacity value affect its child nodes, default value is false. */
		cascadeOpacity : boolean;		
		/** Color of node, default value is white: (255, 255, 255). */
		color : Color;		
		/** Initializes the instance of cc.Node */
		init() : boolean;		
		/** <p>Properties configuration function </br>
		All properties in attrs will be set to the node, </br>
		when the setter of the node is available, </br>
		the property will be set via setter function.</br>
		</p> */
		attr(attrs : any) : void;		
		/** <p>Defines the oder in which the nodes are renderer.                                                                               <br/>
		Nodes that have a Global Z Order lower, are renderer first.                                                                        <br/>
		                                                                                                                                   <br/>
		In case two or more nodes have the same Global Z Order, the oder is not guaranteed.                                                <br/>
		The only exception if the Nodes have a Global Z Order == 0. In that case, the Scene Graph order is used.                           <br/>
		                                                                                                                                   <br/>
		By default, all nodes have a Global Z Order = 0. That means that by default, the Scene Graph order is used to render the nodes.    <br/>
		                                                                                                                                   <br/>
		Global Z Order is useful when you need to render nodes in an order different than the Scene Graph order.                           <br/>
		                                                                                                                                   <br/>
		Limitations: Global Z Order can't be used used by Nodes that have SpriteBatchNode as one of their ancestors.                       <br/>
		And if ClippingNode is one of the ancestors, then "global Z order" will be relative to the ClippingNode.   </p> */
		setGlobalZOrder(globalZOrder : number) : void;		
		/** Return the Node's Global Z Order. */
		getGlobalZOrder() : number;		
		/** Returns the scale factor of the node.
		Assertion will fail when _scaleX != _scaleY. */
		getScale() : number;		
		/** Sets the scale factor of the node. 1.0 is the default scale factor. This function can modify the X and Y scale at the same time. */
		setScale(scale : number|Vec2, scaleY? : number) : void;		
		/** <p>Returns a copy of the position (x,y) of the node in cocos2d coordinates. (0,0) is the left-bottom corner.</p> */
		getPosition() : Vec2;		
		/** <p>
		    Changes the position (x,y) of the node in cocos2d coordinates.<br/>
		    The original point (0,0) is at the left-bottom corner of screen.<br/>
		    Usually we use cc.p(x,y) to compose CCPoint object.<br/>
		    and Passing two numbers (x,y) is more efficient than passing CCPoint object.
		</p> */
		setPosition(newPosOrxValue : Vec2|number, yValue? : number) : void;		
		/** <p>Returns a copy of the anchor point.<br/>
		Anchor point is the point around which all transformations and positioning manipulations take place.<br/>
		It's like a pin in the node where it is "attached" to its parent. <br/>
		The anchorPoint is normalized, like a percentage. (0,0) means the bottom-left corner and (1,1) means the top-right corner. <br/>
		But you can use values higher than (1,1) and lower than (0,0) too.  <br/>
		The default anchor point is (0.5,0.5), so it starts at the center of the node. <br/></p> */
		getAnchorPoint() : Vec2;		
		/** <p>
		    Sets the anchor point in percent.                                                                                              <br/>
		                                                                                                                                   <br/>
		    anchor point is the point around which all transformations and positioning manipulations take place.                            <br/>
		    It's like a pin in the node where it is "attached" to its parent.                                                              <br/>
		    The anchorPoint is normalized, like a percentage. (0,0) means the bottom-left corner and (1,1) means the top-right corner.     <br/>
		    But you can use values higher than (1,1) and lower than (0,0) too.                                                             <br/>
		    The default anchor point is (0.5,0.5), so it starts at the center of the node.
		</p> */
		setAnchorPoint(point : Vec2|number, y? : number) : void;		
		/** Returns a copy of the anchor point in absolute pixels.  <br/>
		you can only read it. If you wish to modify it, use setAnchorPoint */
		getAnchorPointInPoints() : Vec2;		
		/** <p>Returns a copy the untransformed size of the node. <br/>
		The contentSize remains the same no matter the node is scaled or rotated.<br/>
		All nodes has a size. Layer and Scene has the same size of the screen by default. <br/></p> */
		getContentSize(ignoreSizeProvider? : boolean) : Size;		
		/** <p>
		    Sets the untransformed size of the node.                                             <br/>
		                                                                                         <br/>
		    The contentSize remains the same no matter the node is scaled or rotated.            <br/>
		    All nodes has a size. Layer and Scene has the same size of the screen.
		</p> */
		setContentSize(size : Size|number, height? : number) : void;		
		/** Returns a "local" axis aligned bounding box of the node. <br/>
		The returned box is relative only to its parent. */
		getBoundingBox() : Rect;		
		/** Stops all running actions and schedulers */
		cleanup() : void;		
		/** Returns a child from the container given its tag */
		getChildByTag(aTag : number) : Node;		
		/** Returns a child from the container given its name */
		getChildByName(name : string) : Node;		
		/** <p>If the child is added to a 'running' node, then 'onEnter' and 'onEnterTransitionDidFinish' will be called immediately.</p> */
		addChild(child : Node, localZOrder? : number, tag? : number|string) : void;		
		/** Remove itself from its parent node. If cleanup is true, then also remove all actions and callbacks. <br/>
		If the cleanup parameter is not passed, it will force a cleanup. <br/>
		If the node orphan, then nothing happens. */
		removeFromParent(cleanup? : boolean) : void;		
		/** If the cleanup parameter is not passed, it will force a cleanup. <br/>
		<p> "remove" logic MUST only be on this method  <br/>
		If a class wants to extend the 'removeChild' behavior it only needs <br/>
		to override this method </p> */
		removeChild(child : Node, cleanup? : boolean) : void;		
		/** Removes a child from the container by tag value. It will also cleanup all running actions depending on the cleanup parameter.
		If the cleanup parameter is not passed, it will force a cleanup. <br/> */
		removeChildByTag(tag : number, cleanup? : boolean) : void;		
		/** Removes all children from the container and do a cleanup all running actions depending on the cleanup parameter. <br/>
		If the cleanup parameter is not passed, it will force a cleanup. <br/> */
		removeAllChildren(cleanup? : boolean) : void;		
		/** Returns the matrix that transform parent's space coordinates to the node's (local) space coordinates.<br/>
		The matrix is in Pixels.
		The returned transform is readonly and cannot be changed. */
		getParentToNodeTransform() : AffineTransform;		
		/** Returns the world affine transform matrix. The matrix is in Pixels. */
		getNodeToWorldTransform() : AffineTransform;		
		/** Returns the inverse world affine transform matrix. The matrix is in Pixels. */
		getWorldToNodeTransform() : AffineTransform;		
		/** Converts a Point to node (local) space coordinates. The result is in Points. */
		convertToNodeSpace(worldPoint: (x: number, y: number) => void) : Vec2;		
		/** Converts a Point to world space coordinates. The result is in Points. */
		convertToWorldSpace(nodePoint: (x: number, y: number) => void) : Vec2;		
		/** Converts a Point to node (local) space coordinates. The result is in Points.<br/>
		treating the returned/received node point as anchor relative. */
		convertToNodeSpaceAR(worldPoint: (x: number, y: number) => void) : Vec2;		
		/** Converts a local Point to world space coordinates.The result is in Points.<br/>
		treating the returned/received node point as anchor relative. */
		convertToWorldSpaceAR(nodePoint: (x: number, y: number) => void) : Vec2;		
		/** convenience methods which take a cc.Touch instead of cc.Vec2 */
		convertTouchToNodeSpace(touch : Touch) : Vec2;		
		/** converts a cc.Touch (world coordinates) into a local coordinate. This method is AR (Anchor Relative). */
		convertTouchToNodeSpaceAR(touch : Touch) : Vec2;		
		/** Returns the matrix that transform the node's (local) space coordinates into the parent's space coordinates.<br/>
		The matrix is in Pixels. */
		getNodeToParentTransform() : AffineTransform;		
		/** Returns a "world" axis aligned bounding box of the node. */
		getBoundingBoxToWorld() : Rect;		
		/** Returns the displayed opacity of Node,
		the difference between displayed opacity and opacity is that displayed opacity is calculated based on opacity and parent node's opacity when cascade opacity enabled. */
		getDisplayedOpacity() : number;		
		/** Returns the displayed color of Node,
		the difference between displayed color and color is that displayed color is calculated based on color and parent node's color when cascade color enabled. */
		getDisplayedColor() : Color;		
		/** Set whether color should be changed with the opacity value,
		useless in ccsg.Node, but this function is override in some class to have such behavior. */
		setOpacityModifyRGB(opacityValue : boolean) : void;		
		/** Get whether color should be changed with the opacity value */
		isOpacityModifyRGB() : boolean;		
		/** Get the sibling index. */
		getSiblingIndex() : number;		
		/** Set the sibling index of this node. */
		setSiblingIndex(index : number) : void;		
		/** Is this node a child of the given node? */
		isChildOf(parent : Node) : boolean;		
		/** position of node. */
		position : Vec2;		
		/** Scale of node */
		scale : number;		
		/** <p>Sets the x axis position of the node in cocos2d coordinates.</p> */
		getPositionX(x : number) : void;		
		/** <p>Returns the x axis position of the node in cocos2d coordinates.</p> */
		setPositionX() : number;		
		/** <p>Returns the y axis position of the node in cocos2d coordinates.</p> */
		getPositionY() : number;		
		/** <p>Sets the y axis position of the node in cocos2d coordinates.</p> */
		setPositionY(y : number) : void;		
		/** Returns the local Z order of this node. */
		getLocalZOrder() : number;		
		/** <p> LocalZOrder is the 'key' used to sort the node relative to its siblings.                                    <br/>
		                                                                                                                <br/>
		The Node's parent will sort all its children based ont the LocalZOrder value.                                   <br/>
		If two nodes have the same LocalZOrder, then the node that was added first to the children's array              <br/>
		will be in front of the other node in the array.                                                                <br/>
		<br/>
		Also, the Scene Graph is traversed using the "In-Order" tree traversal algorithm ( http://en.wikipedia.org/wiki/Tree_traversal#In-order )
		<br/>
		And Nodes that have LocalZOder values smaller than 0 are the "left" subtree                                                 <br/>
		While Nodes with LocalZOder greater than 0 are the "right" subtree.    </p> */
		setLocalZOrder(localZOrder : number) : void;		
		/** Returns whether the anchor point will be ignored when you position this node.<br/>
		When anchor point ignored, position will be calculated based on the origin point (0, 0) in parent's coordinates. */
		isIgnoreAnchorPointForPosition() : boolean;		
		/** <p>
		    Sets whether the anchor point will be ignored when you position this node.                              <br/>
		    When anchor point ignored, position will be calculated based on the origin point (0, 0) in parent's coordinates.  <br/>
		    This is an internal method, only used by CCLayer and CCScene. Don't call it outside framework.        <br/>
		    The default value is false, while in CCLayer and CCScene are true
		</p> */
		ignoreAnchorPointForPosition(newValue : boolean) : void;		
		/** Returns whether node's opacity value affect its child nodes. */
		isCascadeOpacityEnabled() : boolean;		
		/** Enable or disable cascade opacity, if cascade enabled, child nodes' opacity will be the multiplication of parent opacity and its own opacity. */
		setCascadeOpacityEnabled(cascadeOpacityEnabled : boolean) : void;		
		/** Returns whether node's color value affect its child nodes. */
		isCascadeColorEnabled() : boolean;		
		/** Enable or disable cascade color, if cascade enabled, child nodes' opacity will be the cascade value of parent color and its own color. */
		setCascadeColorEnabled(cascadeColorEnabled : boolean) : void;	
	}	
	
	/****************************************************
	* Node
	*****************************************************/
	
	export module Node {		
		/** The event type supported by Node */
		export class EventType {			
			/** The event type for touch start event, you can use its value directly: 'touchstart' */
			TOUCH_START : string;			
			/** The event type for touch move event, you can use its value directly: 'touchmove' */
			TOUCH_MOVE : string;			
			/** The event type for touch end event, you can use its value directly: 'touchend' */
			TOUCH_END : string;			
			/** The event type for touch end event, you can use its value directly: 'touchcancel' */
			TOUCH_CANCEL : string;			
			/** The event type for mouse down events, you can use its value directly: 'mousedown' */
			MOUSE_DOWN : string;			
			/** The event type for mouse move events, you can use its value directly: 'mousemove' */
			MOUSE_MOVE : string;			
			/** The event type for mouse enter target events, you can use its value directly: 'mouseenter' */
			MOUSE_ENTER : string;			
			/** The event type for mouse leave target events, you can use its value directly: 'mouseleave' */
			MOUSE_LEAVE : string;			
			/** The event type for mouse up events, you can use its value directly: 'mouseup' */
			MOUSE_UP : string;			
			/** The event type for mouse wheel events, you can use its value directly: 'mousewheel' */
			MOUSE_WHEEL : string;		
		}	
	}	
	
	/****************************************************
	* Event
	*****************************************************/
	
	export module Event {		
		/** The Custom event */
		export class EventCustom extends Event {			
			constructor();			
			EventCustom(type : string, bubbles? : boolean) : EventCustom;			
			/** A reference to the detailed data of the event */
			detail : any;			
			/** Sets user data */
			setUserData(data : any) : void;			
			/** Gets user data */
			getUserData() : any;			
			/** Gets event name */
			getEventName() : string;		
		}	
	}	
	
	/****************************************************
	* Button
	*****************************************************/
	
	export module Button {		
		/** Enum for transition type */
		export enum Transition {			
			NONE = 0,
			COLOR = 0,
			SPRITE = 0,		
		}	
	}	
	
	/****************************************************
	* Component
	*****************************************************/
	
	export module Component {		
		/** Component will register a event to target component's handler.
		And it will trigger the handler when a certain event occurs. */
		export class EventHandler {			
			/** Event target */
			target : cc.Node;			
			/** Component name */
			component : string;			
			/** Event handler */
			handler : string;		
		}	
	}	
	
	/****************************************************
	* Layout
	*****************************************************/
	
	export module Layout {		
		/** Enum for Layout type */
		export enum Type {			
			NONE = 0,
			HORIZONTAL = 0,
			VERTICAL = 0,
			GRID = 0,		
		}	
	}	
	
	/****************************************************
	* Layout
	*****************************************************/
	
	export module Layout {		
		/** Enum for Layout Resize Type */
		export enum ResizeType {			
			NONE = 0,
			CONTAINER = 0,
			CHILDREN = 0,		
		}	
	}	
	
	/****************************************************
	* Layout
	*****************************************************/
	
	export module Layout {		
		/** Enum for Grid Layout start axis direction. */
		export enum AxisDirection {			
			HORIZONTAL = 0,
			VERTICAL = 0,		
		}	
	}	
	
	/****************************************************
	* Layout
	*****************************************************/
	
	export module Layout {		
		/** Enum for vertical layout direction. */
		export enum VerticalDirection {			
			BOTTOM_TO_TOP = 0,
			TOP_TO_BOTTOM = 0,		
		}	
	}	
	
	/****************************************************
	* Layout
	*****************************************************/
	
	export module Layout {		
		/** Enum for horizontal layout direction. */
		export enum HorizontalDirection {			
			LEFT_TO_RIGHT = 0,
			RIGHT_TO_LEFT = 0,		
		}	
	}	
	
	/****************************************************
	* ProgressBar
	*****************************************************/
	
	export module ProgressBar {		
		/** Enum for ProgressBar mode */
		export enum Mode {			
			HORIZONTAL = 0,
			VERTICAL = 0,		
		}	
	}	
	
	/****************************************************
	* Scrollbar
	*****************************************************/
	
	export module Scrollbar {		
		/** Enum for Scrollbar direction */
		export enum Direction {			
			HORIZONTAL = 0,
			VERTICAL = 0,		
		}	
	}	
	
	/****************************************************
	* Event
	*****************************************************/
	
	export module Event {		
		/** The mouse event */
		export class EventMouse extends Event {			
			constructor(eventType : number, bubbles : boolean);			
			/** Sets scroll data. */
			setScrollData(scrollX : number, scrollY : number) : void;			
			/** Returns the x axis scroll value. */
			getScrollX() : number;			
			/** Returns the y axis scroll value. */
			getScrollY() : number;			
			/** Sets cursor location. */
			setLocation(x : number, y : number) : void;			
			/** Returns cursor location. */
			getLocation() : Vec2;			
			/** Returns the current cursor location in screen coordinates. */
			getLocationInView() : Vec2;			
			/** Returns the delta distance from the previous location to current location. */
			getDelta() : Vec2;			
			/** Returns the X axis delta distance from the previous location to current location. */
			getDeltaX() : number;			
			/** Returns the Y axis delta distance from the previous location to current location. */
			getDeltaY() : number;			
			/** Sets mouse button. */
			setButton(button : number) : void;			
			/** Returns mouse button. */
			getButton() : number;			
			/** Returns location X axis data. */
			getLocationX() : number;			
			/** Returns location Y axis data. */
			getLocationY() : number;		
		}	
	}	
	
	/****************************************************
	* Event
	*****************************************************/
	
	export module Event {		
		/** The touch event */
		export class EventTouch extends Event {			
			constructor(touchArr : any[], bubbles : boolean);			
			/** Returns event code. */
			getEventCode() : number;			
			/** Returns touches of event. */
			getTouches() : any[];		
		}	
	}	
	
	/****************************************************
	* Event
	*****************************************************/
	
	export module Event {		
		/** Focus change event for UI widget */
		export class EventFocus extends Event {			
			constructor(widgetLoseFocus : Widget, widgetGetFocus : Widget, bubbles : boolean);		
		}	
	}	
	
	/****************************************************
	* Event
	*****************************************************/
	
	export module Event {		
		/** The acceleration event */
		export class EventAcceleration extends Event {			
			constructor(acc : any, bubbles : boolean);		
		}	
	}	
	
	/****************************************************
	* Event
	*****************************************************/
	
	export module Event {		
		/** The keyboard event */
		export class EventKeyboard extends Event {			
			constructor(keyCode : number, isPressed : boolean, bubbles : boolean);		
		}	
	}	
	
	/****************************************************
	* Texture2D
	*****************************************************/
	
	export module Texture2D {		
		/** The texture wrap mode */
		export class WrapMode {			
			/** The constant variable equals gl.REPEAT for texture */
			REPEAT : number;			
			/** The constant variable equals gl.CLAMP_TO_EDGE for texture */
			CLAMP_TO_EDGE : number;			
			/** The constant variable equals gl.MIRRORED_REPEAT for texture */
			MIRRORED_REPEAT : number;		
		}	
	}
}
/** This module provides some JavaScript utilities. */
declare module js {	
	/** Check the obj whether is function or not */
	export function isFunction(obj : any) : boolean;	
	/** Check the obj whether is number or not */
	export function isNumber(obj : any) : boolean;	
	/** Check the obj whether is string or not */
	export function isString(obj : any) : boolean;	
	/** Check the obj whether is array or not */
	export function isArray(obj : any) : boolean;	
	/** Check the obj whether is undefined or not */
	export function isUndefined(obj : any) : boolean;	
	/** Check the obj whether is object or not */
	export function isObject(obj : any) : boolean;	
	/** copy all properties not defined in obj from arguments[1...n] */
	export function addon(obj : any, sourceObj : any) : any;	
	/** copy all properties from arguments[1...n] to obj */
	export function mixin(obj : any, sourceObj : any) : any;	
	/** Derive the class from the supplied base class.
	Both classes are just native javascript constructors, not created by cc.Class, so
	usually you will want to inherit using {% crosslink cc.Class cc.Class %} instead. */
	export function extend(cls : Function, base : Function) : Function;	
	/** Removes all enumerable properties from object */
	export function clear(obj : any) : void;	
	/** Get property descriptor in object and all its ancestors */
	export function getPropertyDescriptor(obj : any, name : string) : any;	
	/** Get class name of the object, if object is just a {} (and which class named 'Object'), it will return null.
	(modified from <a href="http://stackoverflow.com/questions/1249531/how-to-get-a-javascript-objects-class">the code from this stackoverflow post</a>) */
	export function getClassName(obj : any|Function) : string;	
	/** Register the class by specified name manually */
	export function setClassName(className : string, constructor : Function) : void;	
	/** Unregister a class from fireball.
	
	If you dont need a registered class anymore, you should unregister the class so that Fireball will not keep its reference anymore.
	Please note that its still your responsibility to free other references to the class. */
	export function unregisterClass(constructor : Function) : void;	
	/** Get the registered class by name */
	export function getClassByName(classname : string) : Function;	
	/** Define get set accessor, just help to call Object.defineProperty(...) */
	export function getset(obj : any, prop : string, getter : Function, setter : Function, enumerable? : boolean) : void;	
	/** Define get accessor, just help to call Object.defineProperty(...) */
	export function get(obj : any, prop : string, getter : Function, enumerable? : boolean) : void;	
	/** Define set accessor, just help to call Object.defineProperty(...) */
	export function set(obj : any, prop : string, setter : Function, enumerable? : boolean) : void;	
	/** Defines a polyfill field for obsoleted codes. */
	export function obsolete(obj : any, obsoleted : string, newPropName : string, writable? : boolean) : void;	
	/** Defines all polyfill fields for obsoleted codes corresponding to the enumerable properties of props. */
	export function obsoletes(obj : any, objName : any, props : any, writable? : boolean) : void;	
	/** undefined */
	export class array {		
		/** Removes the first occurrence of a specific object from the array. */
		remove(array : any[], value : any) : boolean;		
		/** Removes the array item at the specified index. */
		removeAt(array : any[], index : number) : void;		
		/** Determines whether the array contains a specific value. */
		contains(array : any[], value : any) : boolean;		
		/** Verify array's Type */
		verifyType(array : any[], type : Function) : boolean;		
		/** Removes from array all values in minusArr. For each Value in minusArr, the first matching instance in array will be removed. */
		removeArray(array : any[], minusArr : any[]) : void;		
		/** Inserts some objects at index */
		appendObjectsAt(array : any[], addObjs : any[], index : number) : any[];		
		/** Copy an array's item to a new array (its performance is better than Array.slice) */
		copy(array : any[]) : any[];		
		/** Exact same function as Array.prototype.indexOf.
		HACK: ugliy hack for Baidu mobile browser compatibility,
		stupid Baidu guys modify Array.prototype.indexOf for all pages loaded,
		their version changes strict comparison to non-strict comparison,
		it also ignores the second parameter of the original API,
		and this will cause event handler enter infinite loop.
		Baidu developers, if you ever see this documentation,
		here is the standard: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
		Seriously ! */
		indexOf(searchElement : any, fromIndex? : number) : number;	
	}
}
/** The `core-level` debugger utils, when you turn on the debugger,
it actually run a [node-inspector](https://github.com/node-inspector/node-inspector)
process in the low-level, and you can use your chrome browser debug the core module. */
declare module Editor.Debugger {	
	/** Toggle on or off the `core-level` debugger */
	export function toggle() : void;	
	/** Turn on the `core-level` debugger */
	export function open() : void;	
	/** Turn off the `core-level` debugger */
	export function close() : void;
}
/** Page Level Editor */
declare module Editor {	
	/** Log the normal message and show on the console.
	The method will send ipc message `console:log` to all windows. */
	export function log(args? : ...*) : void;	
	/** Log the success message and show on the console
	The method will send ipc message `console:success` to all windows. */
	export function success(args? : ...*) : void;	
	/** Log the failed message and show on the console
	The method will send ipc message `console:failed` to all windows. */
	export function failed(args? : ...*) : void;	
	/** Log the info message and show on the console
	The method will send ipc message `console:info` to all windows. */
	export function info(args? : ...*) : void;	
	/** Log the warnning message and show on the console,
	it also shows the call stack start from the function call it.
	The method will send ipc message `console:warn` to all windows. */
	export function warn(args? : ...*) : void;	
	/** Log the error message and show on the console,
	it also shows the call stack start from the function call it.
	The method will sends ipc message `console:error` to all windows. */
	export function error(args? : ...*) : void;	
	/** Log the fatal message and show on the console,
	the app will quit immediately after that. */
	export function fatal(args? : ...*) : void;	
	/** Connect to console panel. Once the console connected, all logs will kept in `core-level` and display
	on the console panel in `page-level`. */
	export function connectToConsole() : void;	
	/** Clear the logs */
	export function clearLog() : void;	
	/** Load profile via `name` and `type`, if no profile found, it will use the `defaultProfile` and save it to the disk.
	You must register your profile path with `type` via {@link Editor.registerProfilePath} before you
	can use it. The Editor Framework will search a profile under your register path with the `name`. */
	export function loadProfile(name : string, type : string, defaultProfile : any) : any;	
	/** Search and load all packages from the path you registerred
	{{#crossLink "Editor.registerPackagePath"}}{{/crossLink}} */
	export function loadAllPackages() : void;	
	/** Require module through url path */
	export function require(url : string) : void;	
	/** Spawn child process that start from console */
	export function execSpawn(command : string, options : any) : void;	
	/** Watch packages */
	export function watchPackages() : void;	
	/** Register profile type with the path you provide.
	{{#crossLink "Editor.loadProfile"}}{{/crossLink}} */
	export function registerProfilePath(type : string, path : string) : void;	
	/** Register a path, when loading packages, it will search the path you registerred.
	{{#crossLink "Editor.loadPackages"}}{{/crossLink}} */
	export function registerDefaultLayout(path : string) : void;	
	/** init editor during App.init */
	export function init(opts : any, profile : any, package-search-path : any[], main-menu : Function, panel-window : string, layout : string, selection : any[], i18n : any[]) : void;	
	/** reset editor */
	export function reset() : void;	
	/** The Editor.App is your app.js module. Read more details in
	[Define your application](https://github.com/cocos-creator/editor-framework/blob/master/docs/manual/define-your-app.md). */
	export var App : any;	
	/** The name of your app. It is defined in the `name` field in package.json */
	export var name : string;	
	/** your app version */
	export var version : string;	
	/** The current app.js running directory. */
	export var path : string;	
	/** Your application's data path. Usually it is `~/.{your-app-name}` */
	export var home : string;	
	/** Extends Editor.App */
	export var extend : Function;	
	/** versions of your app and submodules */
	export var versions : any;	
	/** The editor framework module path. Usually it is `{your-app}/editor-framework/` */
	export var frameworkPath : string;	
	/** Send `args...` to windows except the excluded */
	export function _main2renderersExclude(excluded : any, args? : ...*) : void;	
	/** Send `args...` to all opened windows via `channel` in asynchronous message. The `page-level`
	can handle it by listening to the channel event of the ipc module. */
	export function sendToWindows(channel : string, args? : ...*) : void;	
	/** Send `args...` to core itself via `channel` in asynchronous message. */
	export function sendToCore(channel : string, args? : ...*) : void;	
	/** Send `args...` to all opened window and core via `channel` in asynchronous message. */
	export function sendToAll(channel : string, args? : ...*) : void;	
	/** Send `args...` to specific panel via `channel` in asynchronous message. */
	export function sendToPanel(panelID : string, channel : string, args? : ...*) : void;	
	/** Send `args...` to main window via `channel` in asynchronous message. */
	export function sendToMainWindow(channel : string, args? : ...*) : void;	
	/** Convert a url by its protocol to a filesystem path. This function is useful when you try to
	get some internal file. You can use {@link Editor.registerProtocol} to register and map your filesystem
	path to url. By default, Editor Framework register `editor-framework://` and `app://` protocol. */
	export function url(url : string) : void;	
	/** Register a protocol so that {@link Editor.url} can use it to convert an url to the filesystem path.
	The `fn` accept an url Object via [url.parse](https://iojs.org/api/url.html#url_url_parse_urlstr_parsequerystring_slashesdenotehost) */
	export function registerProtocol(protocol : string, fn : Function) : void;	
	/** Require module through url path */
	export function require(url : string) : void;	
	/** Log the normal message and show on the console.
	The method will send ipc message `console:log` to core. */
	export function log(arg? : ...*) : void;	
	/** Send channel to core-level synchronized and return a result which is responded from core-level */
	export function sendToCoreSync(channel : string, arg? : ...*) : any;	
	/** Send channel to editor-core, which is so called as main app, or atom shell's browser side. */
	export function sendToCore(channel : string, arg? : ...*) : void;	
	/** Broadcast channel to all pages.
	The page is so called as atom shell's web side. Each application window is an independent page and has its own JavaScript context. */
	export function sendToWindows(channel : string, arg? : ...*, options? : any) : void;	
	/** Broadcast channel to main page.
	The page is so called as atom shell's web side. Each application window is an independent page and has its own JavaScript context. */
	export function sendToMainWindow(channel : string, arg? : ...*) : void;	
	/** Broadcast channel to all pages and editor-core */
	export function sendToAll(channel : string, arg? : ...*, options? : any) : void;	
	/** Send channel to specific panel */
	export function sendToPanel(panelID : string, channel : string, arg? : ...*) : void;	
	/** Send `args...` to core via `channel` in asynchronous message, and waiting for the `core-level`
	to reply the message through `callback`. */
	export function sendRequestToCore(channel : string, arg? : ...*, reply : Function) : number;	
	/** Cancel request sent to core by sessionId */
	export function cancelRequestToCore() : void;	
	/** Send `args...` to core via `channel` in asynchronous message, and waiting for reply
	to reply the message through `callback`. */
	export function waitForReply(channel : string, arg? : ...*, reply : Function, timeout? : number) : number;	
	/** Cancel wait for reply by channel and sessionId */
	export function cancelWaitForReply() : void;	
	/** The AssetDB instance */
	export var assetdb : AssetDB;	
	/** undefined */
	export class Menu {		
		constructor();		
		Menu(template: (path: string, message: string, command: string, params: any[], panel: string, dev: string) => void, webContents? : any) : Menu;		
		/** De-reference the native menu. */
		dispose() : void;		
		/** Reset the menu from the template. */
		reset(template : object[]|any) : void;		
		/** Clear all menu item in it. */
		clear() : void;		
		/** Build a template into menu item and add it to path */
		add(path : string, template : object[]|any) : void;		
		/** Remove menu item at path. */
		remove(path : string) : void;		
		/** Set menu options at path. */
		set(path : string, options: (icon: NativeImage, enabled: boolean, visible: boolean, checked: boolean) => void) : void;		
		/** Convert the menu template to process additional keyword we added for Electron.
		If webContents provided, the `template.message` will send to the target webContents. */
		convert(template : object[]|any, webContents? : any) : void;		
		register(name : string, fn : Function, force? : boolean) : void;		
		getMenu(name : string) : void;		
		walk(template : object[]|any, fn : Function) : void;	
	}	
	/** Window class for operating editor window */
	export class Window extends EventEmitter {		
		constructor(name : string, options : any);		
		/** load page by url, and send argv in query property of the url. The page level will parse
		the argv when the page is ready and save it in Editor.argv in page level */
		load(url : string, argv : any) : void;		
		/** Show the window */
		show() : void;		
		/** Close the window */
		close() : void;		
		/** Focus on the window */
		focus() : void;		
		/** Minimize the window */
		minimize() : void;		
		/** Restore the window */
		restore() : void;		
		/** Open the dev-tools */
		openDevTools(options: (detach: boolean) => void) : void;		
		/** Try to adjust the window to fit the position and size we give */
		adjust(x : number, y : number, w : number, h : number) : void;		
		/** Commit the current window state */
		commitWindowState(layoutInfo : any) : void;		
		/** Restore window's position and size from the `local` profile `layout.windows.json` */
		restorePositionAndSize() : void;		
		/** Send ipc messages to page */
		sendToPage(channel : string, arg? : ...*) : void;		
		/** Send request to page and wait for the reply
		[Editor.Window.cancelRequestToPage] */
		sendRequestToPage(channel : string, arg? : ...*, reply : Function) : number;		
		/** Cancel request via sessionId */
		cancelRequestToPage(sessionId : number) : void;		
		/** Find window by name or by BrowserWindow instance */
		find(param : string|BrowserWindow|BrowserWindow.webContents) : Editor.Window;		
		/** Add an editor window */
		addWindow(win : Editor.Window) : void;		
		/** Remove an editor window */
		removeWindow(win : Editor.Window) : void;		
		/** Commit all opened window states */
		commitWindowStates() : void;		
		/** Save current windows' states to profile `layout.windows.json` at `local` */
		saveWindowStates() : void;		
		/** If this is a main window */
		isMainWindow : boolean;		
		/** If the window is focused */
		isFocused : boolean;		
		/** If the window is minimized */
		isMinimized : boolean;		
		/** If the window is loaded */
		isLoaded : boolean;	
	}	
	/** Worker class for operating worker */
	export class Worker {		
		constructor(name : string, options : any);	
	}
}
/** Package module for manipulating packages */
declare module Editor.Package {	
	/** Load a package at path */
	export function load(path : string, opts: (build: boolean) => void, cb : Function) : void;	
	/** Unload a package at path */
	export function unload(path : string, cb : Function) : void;	
	/** Reload a package at path */
	export function reload(path : string, opts: (rebuild: boolean) => void, cb : Function) : void;	
	/** Find and get panel info via panelID, the panel info is the json object
	that defined in `panels.{panel-name}` in your package.json */
	export function panelInfo(panelID : string) : any;	
	/** Find and get package info via path, the package info is the json object of your package.json file */
	export function packageInfo(path : string) : any;	
	/** Return the path of the package by name */
	export function packagePath(packageName : string) : string;	
	/** Build package at path */
	export function build(path : string, callback : Function) : string;	
	/** Add package search path */
	export function addPath(path : string|any[]) : void;	
	/** Remove search path from package search path list */
	export function removePath(path : string) : void;	
	/** Reset path */
	export function resetPath() : void;	
	/** Find package by name in package search path list */
	export function find(name : string) : string;	
	/** Return package search path list */
	export var paths : any[];
}
/** Panel module for operating specific panel */
declare module Editor.Panel {	
	/** Open a panel and pass argv to it. The argv will be sent as argument in `panel:run` message in page-level */
	export function open(panelID : string, argv : any) : void;	
	/** Close a panel via panelID */
	export function close(panelID : string) : void;	
	/** Find and return an editor window that contains the panelID */
	export function findWindow(panelID : string) : Editor.Window;	
	/** Find and return editor window list that contains panel defined in package via packageName */
	export function findWindows(packageName : string) : Editor.Window[];	
	/** Find and return panel ID list that contains panel defined in package via packageName */
	export function findPanels(packageName : string) : string[];	
	/** Close all panels defined in package via packageName */
	export function closeAll(packageName : string) : void;
}
/** The main menu module for manipulating main menu items */
declare module Editor.MainMenu {	
	/** Revert to default setup */
	export function _revert() : void;	
	/** Apply main menu changes */
	export function apply() : void;	
	/** Reset main menu to its default template */
	export function reset() : void;	
	/** Build a template into menu item and add it to path */
	export function add(path : string, template : object[]|any) : void;	
	/** Build a template into menu item and add it to path */
	export function add(path : string, template : object[]|any) : void;	
	/** Remove menu item at path. */
	export function remove(path : string) : void;	
	/** Set menu options at path. */
	export function set(path : string, options: (icon: NativeImage, enabled: boolean, visible: boolean, checked: boolean) => void) : void;
}

/****************************************************
* AssetDB
*****************************************************/

declare module AssetDB {	
	/** The remote AssetDB instance */
	export var remote : any;	
	/** The library path */
	export var library : string;	
	/** Reveal given url in native file system */
	export function explore(url : string) : void;	
	/** Reveal given url's library file in native file system */
	export function exploreLib(url : string) : void;	
	/** Get native file path by url */
	export function queryPathByUrl(url : string, cb: (path: string) => void) : void;	
	/** Get uuid by url */
	export function queryUuidByUrl(url : string, cb: (path: string) => void) : void;	
	/** Get native file path by uuid */
	export function queryPathByUuid(uuid : string, cb: (path: string) => void) : void;	
	/** Get asset url by uuid */
	export function queryUrlByUuid(uuid : string, cb: (url: string) => void) : void;	
	/** Get asset info by uuid */
	export function queryInfoByUuid(uuid : string, cb: (info: any) => void) : void;	
	/** Get meta info by uuid */
	export function queryMetaInfoByUuid(uuid : string, cb: (info: any) => void) : void;	
	/** Query all assets from asset-db */
	export function deepQuery(cb: (results: any[]) => void) : void;	
	/** Query assets by url pattern and asset-type */
	export function queryAssets(pattern : string, type : string, cb: (results: any[]) => void) : void;	
	/** Import files outside asset-db to specific url folder.
	The import result will be sent through ipc message `asset-db:assets-created` */
	export function import(rawfiles : any[], destUrl : string) : void;	
	/** Create asset in specific url by sending string data to it.
	The created result will be sent through by ipc message `asset-db:assets-created` */
	export function create(url : string, data : string) : void;	
	/** Move asset from src to dest
	The moved result will be sent through by ipc message `asset-db:assets-moved` */
	export function move(srcUrl : string, destUrl : string) : void;	
	/** Delete assets by url list
	The deleted results will be sent through by ipc message `asset-db:assets-deleted` */
	export function delete(urls : any[]) : void;	
	/** Save specific asset by sending string data
	The saved results will be sent through by ipc message `asset-db:asset-changed` */
	export function save(url : string, data : string) : void;	
	/** Save specific meta by sending meta's json string
	The saved results will be sent through by ipc message `asset-db:asset-changed` */
	export function saveMeta(uuid : string, metaJson : string) : void;	
	/** Return uuid by url. if uuid not found, it will return null. */
	export function urlToUuid(url : string) : string;	
	/** Return uuid by file path. if uuid not found, it will return null. */
	export function fspathToUuid(fspath : string) : string;	
	/** Return file path by uuid. if file path not found, it will return null. */
	export function uuidToFspath(uuid : string) : string;	
	/** Return url by uuid. if url not found, it will return null. */
	export function uuidToUrl(uuid : string) : string;	
	/** Check existance by url. */
	export function exists(url : string) : string;	
	/** Check existance by uuid. */
	export function existsByUuid(uuid : string) : string;	
	/** Check existance by path. */
	export function existsByPath(fspath : string) : string;	
	/** Check whether asset for a given url is a sub asset. */
	export function isSubAsset(url : string) : boolean;	
	/** Check whether asset for a given uuid is a sub asset. */
	export function isSubAssetByUuid(uuid : string) : boolean;	
	/** Check whether asset for a given path is a sub asset. */
	export function isSubAssetByPath(fspath : string) : boolean;	
	/** Check whether asset contains sub assets for a given url. */
	export function containsSubAssets(url : string) : boolean;	
	/** Check whether asset contains sub assets for a given uuid. */
	export function containsSubAssetsByUuid(uuid : string) : boolean;	
	/** Check whether asset contains sub assets for a given path. */
	export function containsSubAssetsByPath(path : string) : boolean;	
	/** Return asset info by a given url. */
	export function assetInfo(url : string) : any;	
	/** Return asset info by a given uuid. */
	export function assetInfoByUuid(uuid : string) : any;	
	/** Return asset info by a given file path. */
	export function assetInfoByPath(fspath : string) : any;	
	/** Return all sub assets info by url if the url contains sub assets. */
	export function subAssetInfos(url : string) : any[];	
	/** Return all sub assets info by uuid if the uuid contains sub assets. */
	export function subAssetInfosByUuid(uuid : string) : any[];	
	/** Return all sub assets info by path if the path contains sub assets. */
	export function subAssetInfosByPath(fspath : string) : any[];	
	/** Return meta instance by a given url. */
	export function loadMeta(url : string) : any;	
	/** Return meta instance by a given uuid. */
	export function loadMetaByUuid(uuid : string) : any;	
	/** Return meta instance by a given path. */
	export function loadMetaByPath(fspath : string) : any;	
	/** Return whether a given url is reference to a mount */
	export function isMount(url : string) : boolean;	
	/** Return whether a given path is reference to a mount */
	export function isMountByPath(fspath : string) : boolean;	
	/** Return whether a given uuid is reference to a mount */
	export function isMountByUuid(uuid : string) : boolean;	
	/** Return mount info by url */
	export function mountInfo(url : string) : any;	
	/** Return mount info by uuid */
	export function mountInfoByUuid(uuid : string) : any;	
	/** Return mount info by path */
	export function mountInfoByPath(fspath : string) : any;	
	/** mount a directory to assetdb, and give it a name. if you don't provide a name, it will mount to root. */
	export function mount(path : string, mountPath : string, opts: (hide: any, virtual: any, icon: any) => void, cb? : Function) : void;	
	/** Unmount by name */
	export function unmount(mountPath : string, cb? : Function) : void;
}