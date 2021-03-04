#import <React/RCTBridgeDelegate.h>
#import <UIKit/UIKit.h>

@interface AppDelegate : UIResponder <UIApplicationDelegate, RCTBridgeDelegate>
+ (void)showSplash:(NSString*)splashScreen inRootView:(UIView*)rootView;
+ (void)showLottieSplash:(UIView*)splashScreen inRootView:(UIView*)rootView;
+ (void)show;
+ (void)setAnimationFinished:(Boolean)flag;
+ (void)hide;
@property (nonatomic, strong) UIWindow *window;

@end
