// auto-generated by build/build-cdt-strings.js
/* eslint-disable */

import * as i18n from '../lib/i18n/i18n.js';

const UIStrings = {
  /**
   * @description Description text for not restored reason NotMainFrame.
   */
  notMainFrame: 'Navigation happened in a frame other than the main frame.',
  /**
   * @description Description text for not restored reason BackForwardCacheDisabled.
   */
  backForwardCacheDisabled:
      'Back/forward cache is disabled by flags. Visit chrome://flags/#back-forward-cache to enable it locally on this device.',
  /**
   * @description Description text for not restored reason RelatedActiveContentsExist.
   * Note: "window.open()" is the name of a JavaScript method and should not be translated.
   */
  relatedActiveContentsExist:
      'The page was opened using \'`window.open()`\' and another tab has a reference to it, or the page opened a window.',
  /**
   * @description Description text for not restored reason HTTPStatusNotOK.
   */
  HTTPStatusNotOK: 'Only pages with a status code of 2XX can be cached.',
  /**
   * @description Description text for not restored reason SchemeNotHTTPOrHTTPS.
   */
  schemeNotHTTPOrHTTPS: 'Only pages whose URL scheme is HTTP / HTTPS can be cached.',
  /**
   * @description Description text for not restored reason Loading.
   */
  loading: 'The page did not finish loading before navigating away.',
  /**
   * @description Description text for not restored reason WasGrantedMediaAccess.
   */
  wasGrantedMediaAccess:
      'Pages that have granted access to record video or audio are not currently eligible for back/forward cache.',
  /**
   * @description Description text for not restored reason HTTPMethodNotGET.
   */
  HTTPMethodNotGET: 'Only pages loaded via a GET request are eligible for back/forward cache.',
  /**
   * @description Description text for not restored reason SubframeIsNavigating.
   */
  subframeIsNavigating: 'An iframe on the page started a navigation that did not complete.',
  /**
   * @description Description text for not restored reason Timeout.
   */
  timeout: 'The page exceeded the maximum time in back/forward cache and was expired.',
  /**
   * @description Description text for not restored reason CacheLimit.
   */
  cacheLimit: 'The page was evicted from the cache to allow another page to be cached.',
  /**
   * @description Description text for not restored reason JavaScriptExecution.
   */
  JavaScriptExecution: 'Chrome detected an attempt to execute JavaScript while in the cache.',
  /**
   * @description Description text for not restored reason RendererProcessKilled.
   */
  rendererProcessKilled: 'The renderer process for the page in back/forward cache was killed.',
  /**
   * @description Description text for not restored reason RendererProcessCrashed.
   */
  rendererProcessCrashed: 'The renderer process for the page in back/forward cache crashed.',
  /**
   * @description Description text for not restored reason GrantedMediaStreamAccess.
   */
  grantedMediaStreamAccess:
      'Pages that have granted media stream access are not currently eligible for back/forward cache.',
  /**
   * @description Description text for not restored reason CacheFlushed.
   */
  cacheFlushed: 'The cache was intentionally cleared.',
  /**
   * @description Description text for not restored reason ServiceWorkerVersionActivation.
   */
  serviceWorkerVersionActivation: 'The page was evicted from back/forward cache due to a service worker activation.',
  /**
   * @description Description text for not restored reason SessionRestored.
   */
  sessionRestored: 'Chrome restarted and cleared the back/forward cache entries.',
  /**
   * @description Description text for not restored reason ServiceWorkerPostMessage.
   * Note: "MessageEvent" should not be translated.
   */
  serviceWorkerPostMessage: 'A service worker attempted to send the page in back/forward cache a `MessageEvent`.',
  /**
   * @description Description text for not restored reason EnteredBackForwardCacheBeforeServiceWorkerHostAdded.
   */
  enteredBackForwardCacheBeforeServiceWorkerHostAdded:
      'A service worker was activated while the page was in back/forward cache.',
  /**
   * @description Description text for not restored reason ServiceWorkerClaim.
   */
  serviceWorkerClaim: 'The page was claimed by a service worker while it is in back/forward cache.',
  /**
   * @description Description text for not restored reason HaveInnerContents.
   */
  haveInnerContents: 'Pages that use portals are not currently eligible for back/forward cache.',
  /**
   * @description Description text for not restored reason TimeoutPuttingInCache.
   */
  timeoutPuttingInCache:
      'The page timed out entering back/forward cache (likely due to long-running pagehide handlers).',
  /**
   * @description Description text for not restored reason BackForwardCacheDisabledByLowMemory.
   */
  backForwardCacheDisabledByLowMemory: 'Back/forward cache is disabled due to insufficient memory.',
  /**
   * @description Description text for not restored reason BackForwardcCacheDisabledByCommandLine.
   */
  backForwardCacheDisabledByCommandLine: 'Back/forward cache is disabled by the command line.',
  /**
   * @description Description text for not restored reason NetworkRequestDatapipeDrainedAsBytesConsumer.
   */
  networkRequestDatapipeDrainedAsBytesConsumer:
      'Pages that have inflight fetch() or XHR are not currently eligible for back/forward cache.',
  /**
   * @description Description text for not restored reason NetworkRequestRedirected.
   */
  networkRequestRedirected:
      'The page was evicted from back/forward cache because an active network request involved a redirect.',
  /**
   * @description Description text for not restored reason NetworkRequestTimeout.
   */
  networkRequestTimeout:
      'The page was evicted from the cache because a network connection was open too long. Chrome limits the amount of time that a page may receive data while cached.',
  /**
   * @description Description text for not restored reason NetworkExceedsBufferLimit.
   */
  networkExceedsBufferLimit:
      'The page was evicted from the cache because an active network connection received too much data. Chrome limits the amount of data that a page may receive while cached.',
  /**
   * @description Description text for not restored reason NavigationCancelledWhileRestoring.
   */
  navigationCancelledWhileRestoring:
      'Navigation was cancelled before the page could be restored from back/forward cache.',
  /**
   * @description Description text for not restored reason BackForwardCacheDisabledForPrerender.
   */
  backForwardCacheDisabledForPrerender: 'Back/forward cache is disabled for prerenderer.',
  /**
   * @description Description text for not restored reason userAgentOverrideDiffers.
   */
  userAgentOverrideDiffers: 'Browser has changed the user agent override header.',
  /**
   * @description Description text for not restored reason ForegroundCacheLimit.
   */
  foregroundCacheLimit: 'The page was evicted from the cache to allow another page to be cached.',
  /**
   * @description Description text for not restored reason BackForwardCacheDisabledForDelegate.
   */
  backForwardCacheDisabledForDelegate: 'Back/forward cache is not supported by delegate.',
  /**
   * @description Description text for not restored reason UnloadHandlerExistsInMainFrame.
   */
  unloadHandlerExistsInMainFrame: 'The page has an unload handler in the main frame.',
  /**
   * @description Description text for not restored reason UnloadHandlerExistsInSubFrame.
   */
  unloadHandlerExistsInSubFrame: 'The page has an unload handler in a sub frame.',
  /**
   * @description Description text for not restored reason ServiceWorkerUnregistration.
   */
  serviceWorkerUnregistration: 'ServiceWorker was unregistered while a page was in back/forward cache.',
  /**
   * @description Description text for not restored reason NoResponseHead.
   */
  noResponseHead: 'Pages that do not have a valid response head cannot enter back/forward cache.',
  /**
   * @description Description text for not restored reason CacheControlNoStore.
   */
  cacheControlNoStore: 'Pages with cache-control:no-store header cannot enter back/forward cache.',
  /**
   * @description Description text for not restored reason IneligibleAPI.
   */
  ineligibleAPI: 'Ineligible APIs were used.',
  /**
   * @description Description text for not restored reason InternalError.
   */
  internalError: 'Internal error.',
  /**
   * @description Description text for not restored reason WebSocket.
   */
  webSocket: 'Pages with WebSocket cannot enter back/forward cache.',
  /**
   * @description Description text for not restored reason WebTransport.
   */
  webTransport: 'Pages with WebTransport cannot enter back/forward cache.',
  /**
   * @description Description text for not restored reason WebRTC.
   */
  webRTC: 'Pages with WebRTC cannot enter back/forward cache.',
  /**
   * @description Description text for not restored reason MainResourceHasCacheControlNoStore.
   */
  mainResourceHasCacheControlNoStore:
      'Pages whose main resource has cache-control:no-store cannot enter back/forward cache.',
  /**
   * @description Description text for not restored reason MainResourceHasCacheControlNoCache.
   */
  mainResourceHasCacheControlNoCache:
      'Pages whose main resource has cache-control:no-cache cannot enter back/forward cache.',
  /**
   * @description Description text for not restored reason SubresourceHasCacheControlNoStore.
   */
  subresourceHasCacheControlNoStore:
      'Pages whose subresource has cache-control:no-store cannot enter back/forward cache.',
  /**
   * @description Description text for not restored reason SubresourceHasCacheControlNoCache.
   */
  subresourceHasCacheControlNoCache:
      'Pages whose subresource has cache-control:no-cache cannot enter back/forward cache.',
  /**
   * @description Description text for not restored reason ContainsPlugins.
   */
  containsPlugins: 'Pages containing plugins are not currently eligible for back/forward cache.',
  /**
   * @description Description text for not restored reason DocumentLoaded.
   */
  documentLoaded: 'The document did not finish loading before navigating away.',
  /**
   * @description Description text for not restored reason DedicatedWorkerOrWorklet.
   */
  dedicatedWorkerOrWorklet:
      'Pages that use a dedicated worker or worklet are not currently eligible for back/forward cache.',
  /**
   * @description Description text for not restored reason OutstandingNetworkRequestOthers.
   */
  outstandingNetworkRequestOthers:
      'Pages with an in-flight network request are not currently eligible for back/forward cache.',
  /**
   * @description Description text for not restored reason OutstandingIndexedDBTransaction.
   */
  outstandingIndexedDBTransaction:
      'Page with ongoing indexed DB transactions are not currently eligible for back/forward cache.',
  /**
   * @description Description text for not restored reason RequestedNotificationsPermission.
   */
  requestedNotificationsPermission:
      'Pages that have requested notifications permissions are not currently eligible for back/forward cache.',
  /**
   * @description Description text for not restored reason RequestedMIDIPermission.
   */
  requestedMIDIPermission:
      'Pages that have requested MIDI permissions are not currently eligible for back/forward cache.',
  /**
   * @description Description text for not restored reason RequestedAudioCapturePermission.
   */
  requestedAudioCapturePermission:
      'Pages that have requested audio capture permissions are not currently eligible for back/forward cache.',
  /**
   * @description Description text for not restored reason RequestedVideoCapturePermission.
   */
  requestedVideoCapturePermission:
      'Pages that have requested video capture permissions are not currently eligible for back/forward cache.',
  /**
   * @description Description text for not restored reason RequestedBackForwardCacheBlockedSensors.
   */
  requestedBackForwardCacheBlockedSensors:
      'Pages that have requested sensor permissions are not currently eligible for back/forward cache.',
  /**
   * @description Description text for not restored reason RequestedBackgroundWorkPermission.
   */
  requestedBackgroundWorkPermission:
      'Pages that have requested background sync or fetch permissions are not currently eligible for back/forward cache.',
  /**
   * @description Description text for not restored reason BroadcastChannel.
   */
  broadcastChannel: 'The page cannot be cached because it has a BroadcastChannel instance with registered listeners.',
  /**
   * @description Description text for not restored reason IndexedDBConnection.
   */
  indexedDBConnection:
      'Pages that have an open IndexedDB connection are not currently eligible for back/forward cache.',
  /**
   * @description Description text for not restored reason WebXR.
   */
  webXR: 'Pages that use WebXR are not currently eligible for back/forward cache.',
  /**
   * @description Description text for not restored reason SharedWorker.
   */
  sharedWorker: 'Pages that use SharedWorker are not currently eligible for back/forward cache.',
  /**
   * @description Description text for not restored reason WebLocks.
   */
  webLocks: 'Pages that use WebLocks are not currently eligible for back/forward cache.',
  /**
   * @description Description text for not restored reason WebHID.
   */
  webHID: 'Pages that use WebHID are not currently eligible for back/forward cache.',
  /**
   * @description Description text for not restored reason WebShare.
   */
  webShare: 'Pages that use WebShare are not currently eligible for back/forwad cache.',
  /**
   * @description Description text for not restored reason RequestedStorageAccessGrant.
   */
  requestedStorageAccessGrant:
      'Pages that have requested storage access are not currently eligible for back/forward cache.',
  /**
   * @description Description text for not restored reason WebNfc.
   */
  webNfc: 'Pages that use WebNfc are not currently eligible for back/forwad cache.',
  /**
   * @description Description text for not restored reason OutstandingNetworkRequestFetch.
   */
  outstandingNetworkRequestFetch:
      'Pages with an in-flight fetch network request are not currently eligible for back/forward cache.',
  /**
   * @description Description text for not restored reason OutstandingNetworkRequestXHR.
   */
  outstandingNetworkRequestXHR:
      'Pages with an in-flight XHR network request are not currently eligible for back/forward cache.',
  /**
   * @description Description text for not restored reason AppBanner.
   */
  appBanner: 'Pages that requested an AppBanner are not currently eligible for back/forward cache.',
  /**
   * @description Description text for not restored reason Printing.
   */
  printing: 'Pages that show Printing UI are not currently eligible for back/forward cache.',
  /**
   * @description Description text for not restored reason WebDatabase.
   */
  webDatabase: 'Pages that use WebDatabase are not currently eligible for back/forward cache.',
  /**
   * @description Description text for not restored reason PictureInPicture.
   */
  pictureInPicture: 'Pages that use Picture-in-Picture are not currently eligible for back/forward cache.',
  /**
   * @description Description text for not restored reason Portal.
   */
  portal: 'Pages that use portals are not currently eligible for back/forward cache.',
  /**
   * @description Description text for not restored reason SpeechRecognizer.
   */
  speechRecognizer: 'Pages that use SpeechRecognizer are not currently eligible for back/forward cache.',
  /**
   * @description Description text for not restored reason IdleManager.
   */
  idleManager: 'Pages that use IdleManager are not currently eligible for back/forward cache.',
  /**
   * @description Description text for not restored reason PaymentManager.
   */
  paymentManager: 'Pages that use PaymentManager are not currently eligible for back/forward cache.',
  /**
   * @description Description text for not restored reason SpeechSynthesis.
   */
  speechSynthesis: 'Pages that use SpeechSynthesis are not currently eligible for back/forward cache.',
  /**
   * @description Description text for not restored reason KeyboardLock.
   */
  keyboardLock: 'Pages that use Keyboard lock are not currently eligible for back/forward cache.',
  /**
   * @description Description text for not restored reason WebOTPService.
   */
  webOTPService: 'Pages that use WebOTPService are not currently eligible for bfcache.',
  /**
   * @description Description text for not restored reason OutstandingNetworkRequestDirectSocket.
   */
  outstandingNetworkRequestDirectSocket:
      'Pages with an in-flight network request are not currently eligible for back/forward cache.',
  /**
   * @description Description text for not restored reason InjectedJavascript.
   */
  injectedJavascript:
      'Pages that `JavaScript` is injected into by extensions are not currently eligible for back/forward cache.',
  /**
   * @description Description text for not restored reason InjectedStyleSheet.
   */
  injectedStyleSheet:
      'Pages that a `StyleSheet` is injected into by extensions are not currently eligible for back/forward cache.',
  /**
   * @description Description text for not restored reason ContentSecurityHandler.
   */
  contentSecurityHandler: 'Pages that use SecurityHandler are not eligible for back/forward cache.',
  /**
   * @description Description text for not restored reason NotMainFrame.
   */
  contentWebAuthenticationAPI: 'Pages that use WebAuthetication API are not eligible for back/forward cache.',
  /**
   * @description Description text for not restored reason NotMainFrame.
   */
  contentFileChooser: 'Pages that use FileChooser API are not eligible for back/forward cache.',
  /**
   * @description Description text for not restored reason NotMainFrame.
   */
  contentSerial: 'Pages that use Serial API are not eligible for back/forward cache.',
  /**
   * @description Description text for not restored reason NotMainFrame.
   */
  contentFileSystemAccess: 'Pages that use File System Access API are not eligible for back/forward cache.',
  /**
   * @description Description text for not restored reason NotMainFrame.
   */
  contentMediaDevicesDispatcherHost: 'Pages that use Media Device Dispatcher are not eligible for back/forward cache.',
  /**
   * @description Description text for not restored reason NotMainFrame.
   */
  contentWebBluetooth: 'Pages that use WebBluetooth API are not eligible for back/forward cache.',
  /**
   * @description Description text for not restored reason ContentWebUSB.
   */
  contentWebUSB: 'Pages that use WebUSB API are not eligible for back/forward cache.',
  /**
   * @description Description text for not restored reason ContentMediaSession.
   */
  contentMediaSession:
      'Pages that use MediaSession API and set a playback state are not eligible for back/forward cache.',
  /**
   * @description Description text for not restored reason ContentMediaSessionService.
   */
  contentMediaSessionService:
      'Pages that use MediaSession API and set action handlers are not eligible for back/forward cache.',
  /**
   * @description Description text for not restored reason ContentMediaPlay.
   */
  contentMediaPlay: 'A media player was playing upon navigating away.',
  /**
   * @description Description text for not restored reason ContentScreenReader.
   */
  contentScreenReader: 'Back/forward cache is disabled due to screen reader.',

  /**
   *  @description Description text for not restored reason EmbedderPopupBlockerTabHelper.
   */
  embedderPopupBlockerTabHelper: 'Popup blocker was present upon navigating away.',

  /**
   *  @description Description text for not restored reason EmbedderSafeBrowsingTriggeredPopupBlocker.
   */
  embedderSafeBrowsingTriggeredPopupBlocker: 'Safe Browsing considered this page to be abusive and blocked popup.',

  /**
   *  @description Description text for not restored reason EmbedderSafeBrowsingThreatDetails.
   */
  embedderSafeBrowsingThreatDetails: 'Safe Browsing details were shown upon navigating away.',

  /**
   *  @description Description text for not restored reason EmbedderAppBannerManager.
   */
  embedderAppBannerManager: 'App Banner was present upon navigating away.',

  /**
   *  @description Description text for not restored reason EmbedderDomDistillerViewerSource.
   */
  embedderDomDistillerViewerSource: 'DOM Distiller Viewer was present upon navigating away.',

  /**
   *  @description Description text for not restored reason EmbedderDomDistillerSelfDeletingRequestDelegate.
   */
  embedderDomDistillerSelfDeletingRequestDelegate: 'DOM distillation was in progress upon navigating away.',

  /**
   *  @description Description text for not restored reason EmbedderOomInterventionTabHelper.
   */
  embedderOomInterventionTabHelper: 'Out-Of-Memory Intervention bar was present upon navigating away.',

  /**
   *  @description Description text for not restored reason EmbedderOfflinePage.
   */
  embedderOfflinePage: 'The offline page was shown upon navigating away.',

  /**
   *  @description Description text for not restored reason EmbedderChromePasswordManagerClientBindCredentialManager.
   */
  embedderChromePasswordManagerClientBindCredentialManager: 'Chrome Password Manager was present upon navigating away.',

  /**
   *  @description Description text for not restored reason EmbedderPermissionRequestManager.
   */
  embedderPermissionRequestManager: 'There were permission requests upon navigating away.',

  /**
   *  @description Description text for not restored reason EmbedderModalDialog.
   */
  embedderModalDialog:
      'Modal dialog such as form resubmission or http password dialog was shown for the page upon navigating away.',

  /**
   *  @description Description text for not restored reason EmbedderExtensions.
   */
  embedderExtensions: 'Back/forward cache is disabled due to extensions.',

  /**
   *  @description Description text for not restored reason EmbedderExtensionMessaging.
   */
  embedderExtensionMessaging: 'Back/forward cache is disabled due to extensions using messaging API.',

  /**
   *  @description Description text for not restored reason EmbedderExtensionMessagingForOpenPort.
   */
  embedderExtensionMessagingForOpenPort:
      'Extensions with long-lived connection should close the connection before entering back/forward cache.',

  /**
   *  @description Description text for not restored reason EmbedderExtensionSentMessageToCachedFrame.
   */
  embedderExtensionSentMessageToCachedFrame:
      'Extensions with long-lived connection attempted to send messages to frames in back/forward cache.',
  /**
   *  @description Description text for not restored reason ErrorDocument.
   */
  errorDocument: 'Back/forward cache is disabled due to a document error.',
  /**
   *  @description Description text for not restored reason FencedFramesEmbedder.
   */
  fencedFramesEmbedder: 'Pages using FencedFrames cannot be stored in bfcache.',
  /**
   *  @description Description text for not restored reason KeepaliveRequest.
   */
  keepaliveRequest: 'Back/forward cache is disabled due to a keepalive request.',
  /**
   *  @description Empty string to roll protocol.
   */
  authorizationHeader: 'Back/forward cache is disabled due to a keepalive request.',
  /**
   *  @description Description text for not restored reason IndexedDBEvent.
   */
  indexedDBEvent: 'Back/forward cache is disabled due to an IndexedDB event.',
  /**
   * @description Description text for not restored reason CookieDisabled.
   */
  cookieDisabled:
      'Back/forward cache is disabled because cookies are disabled on a page that uses `Cache-Control: no-store`.',
};

const str_ = i18n.createIcuMessageFn(import.meta.url, UIStrings);


/** @type {Record<string, {name: LH.IcuMessage} | undefined>} */
const NotRestoredReasonDescription = {
  'NotPrimaryMainFrame': {name: str_(UIStrings.notMainFrame)},
  'BackForwardCacheDisabled': {name: str_(UIStrings.backForwardCacheDisabled)},
  'RelatedActiveContentsExist': {name: str_(UIStrings.relatedActiveContentsExist)},
  'HTTPStatusNotOK': {name: str_(UIStrings.HTTPStatusNotOK)},
  'SchemeNotHTTPOrHTTPS': {name: str_(UIStrings.schemeNotHTTPOrHTTPS)},
  'Loading': {name: str_(UIStrings.loading)},
  'WasGrantedMediaAccess': {name: str_(UIStrings.wasGrantedMediaAccess)},
  'HTTPMethodNotGET': {name: str_(UIStrings.HTTPMethodNotGET)},
  'SubframeIsNavigating': {name: str_(UIStrings.subframeIsNavigating)},
  'Timeout': {name: str_(UIStrings.timeout)},
  'CacheLimit': {name: str_(UIStrings.cacheLimit)},
  'JavaScriptExecution': {name: str_(UIStrings.JavaScriptExecution)},
  'RendererProcessKilled': {name: str_(UIStrings.rendererProcessKilled)},
  'RendererProcessCrashed': {name: str_(UIStrings.rendererProcessCrashed)},
  'GrantedMediaStreamAccess': {name: str_(UIStrings.grantedMediaStreamAccess)},
  'CacheFlushed': {name: str_(UIStrings.cacheFlushed)},
  'ServiceWorkerVersionActivation': {name: str_(UIStrings.serviceWorkerVersionActivation)},
  'SessionRestored': {name: str_(UIStrings.sessionRestored)},
  'ServiceWorkerPostMessage': {name: str_(UIStrings.serviceWorkerPostMessage)},
  'EnteredBackForwardCacheBeforeServiceWorkerHostAdded':
      {name: str_(UIStrings.enteredBackForwardCacheBeforeServiceWorkerHostAdded)},
  'ServiceWorkerClaim': {name: str_(UIStrings.serviceWorkerClaim)},
  'HaveInnerContents': {name: str_(UIStrings.haveInnerContents)},
  'TimeoutPuttingInCache': {name: str_(UIStrings.timeoutPuttingInCache)},
  'BackForwardCacheDisabledByLowMemory': {name: str_(UIStrings.backForwardCacheDisabledByLowMemory)},
  'BackForwardCacheDisabledByCommandLine': {name: str_(UIStrings.backForwardCacheDisabledByCommandLine)},
  'NetworkRequestDatapipeDrainedAsBytesConsumer':
      {name: str_(UIStrings.networkRequestDatapipeDrainedAsBytesConsumer)},
  'NetworkRequestRedirected': {name: str_(UIStrings.networkRequestRedirected)},
  'NetworkRequestTimeout': {name: str_(UIStrings.networkRequestTimeout)},
  'NetworkExceedsBufferLimit': {name: str_(UIStrings.networkExceedsBufferLimit)},
  'NavigationCancelledWhileRestoring': {name: str_(UIStrings.navigationCancelledWhileRestoring)},
  'BackForwardCacheDisabledForPrerender': {name: str_(UIStrings.backForwardCacheDisabledForPrerender)},
  'UserAgentOverrideDiffers': {name: str_(UIStrings.userAgentOverrideDiffers)},
  'ForegroundCacheLimit': {name: str_(UIStrings.foregroundCacheLimit)},
  'BackForwardCacheDisabledForDelegate': {name: str_(UIStrings.backForwardCacheDisabledForDelegate)},
  'UnloadHandlerExistsInMainFrame': {name: str_(UIStrings.unloadHandlerExistsInMainFrame)},
  'UnloadHandlerExistsInSubFrame': {name: str_(UIStrings.unloadHandlerExistsInSubFrame)},
  'ServiceWorkerUnregistration': {name: str_(UIStrings.serviceWorkerUnregistration)},
  'NoResponseHead': {name: str_(UIStrings.noResponseHead)},
  'CacheControlNoStore': {name: str_(UIStrings.cacheControlNoStore)},
  'CacheControlNoStoreCookieModified': {name: str_(UIStrings.cacheControlNoStore)},
  'CacheControlNoStoreHTTPOnlyCookieModified': {name: str_(UIStrings.cacheControlNoStore)},
  'DisableForRenderFrameHostCalled': {name: str_(UIStrings.ineligibleAPI)},
  'BlocklistedFeatures': {name: str_(UIStrings.ineligibleAPI)},
  'SchedulerTrackedFeatureUsed': {name: str_(UIStrings.ineligibleAPI)},
  'DomainNotAllowed': {name: str_(UIStrings.internalError)},
  'ConflictingBrowsingInstance': {name: str_(UIStrings.internalError)},
  'NotMostRecentNavigationEntry': {name: str_(UIStrings.internalError)},
  'IgnoreEventAndEvict': {name: str_(UIStrings.internalError)},
  'BrowsingInstanceNotSwapped': {name: str_(UIStrings.internalError)},
  'ActivationNavigationsDisallowedForBug1234857': {name: str_(UIStrings.internalError)},
  'Unknown': {name: str_(UIStrings.internalError)},
  'RenderFrameHostReused_SameSite': {name: str_(UIStrings.internalError)},
  'RenderFrameHostReused_CrossSite': {name: str_(UIStrings.internalError)},
  'WebSocket': {name: str_(UIStrings.webSocket)},
  'WebTransport': {name: str_(UIStrings.webTransport)},
  'WebRTC': {name: str_(UIStrings.webRTC)},
  'MainResourceHasCacheControlNoStore': {name: str_(UIStrings.mainResourceHasCacheControlNoStore)},
  'MainResourceHasCacheControlNoCache': {name: str_(UIStrings.mainResourceHasCacheControlNoCache)},
  'SubresourceHasCacheControlNoStore': {name: str_(UIStrings.subresourceHasCacheControlNoStore)},
  'SubresourceHasCacheControlNoCache': {name: str_(UIStrings.subresourceHasCacheControlNoCache)},
  'ContainsPlugins': {name: str_(UIStrings.containsPlugins)},
  'DocumentLoaded': {name: str_(UIStrings.documentLoaded)},
  'DedicatedWorkerOrWorklet': {name: str_(UIStrings.dedicatedWorkerOrWorklet)},
  'OutstandingNetworkRequestOthers': {name: str_(UIStrings.outstandingNetworkRequestOthers)},
  'OutstandingIndexedDBTransaction': {name: str_(UIStrings.outstandingIndexedDBTransaction)},
  'RequestedNotificationsPermission': {name: str_(UIStrings.requestedNotificationsPermission)},
  'RequestedMIDIPermission': {name: str_(UIStrings.requestedMIDIPermission)},
  'RequestedAudioCapturePermission': {name: str_(UIStrings.requestedAudioCapturePermission)},
  'RequestedVideoCapturePermission': {name: str_(UIStrings.requestedVideoCapturePermission)},
  'RequestedBackForwardCacheBlockedSensors': {name: str_(UIStrings.requestedBackForwardCacheBlockedSensors)},
  'RequestedBackgroundWorkPermission': {name: str_(UIStrings.requestedBackgroundWorkPermission)},
  'BroadcastChannel': {name: str_(UIStrings.broadcastChannel)},
  'IndexedDBConnection': {name: str_(UIStrings.indexedDBConnection)},
  'WebXR': {name: str_(UIStrings.webXR)},
  'SharedWorker': {name: str_(UIStrings.sharedWorker)},
  'WebLocks': {name: str_(UIStrings.webLocks)},
  'WebHID': {name: str_(UIStrings.webHID)},
  'WebShare': {name: str_(UIStrings.webShare)},
  'RequestedStorageAccessGrant': {name: str_(UIStrings.requestedStorageAccessGrant)},
  'WebNfc': {name: str_(UIStrings.webNfc)},
  'OutstandingNetworkRequestFetch': {name: str_(UIStrings.outstandingNetworkRequestFetch)},
  'OutstandingNetworkRequestXHR': {name: str_(UIStrings.outstandingNetworkRequestXHR)},
  'AppBanner': {name: str_(UIStrings.appBanner)},
  'Printing': {name: str_(UIStrings.printing)},
  'WebDatabase': {name: str_(UIStrings.webDatabase)},
  'PictureInPicture': {name: str_(UIStrings.pictureInPicture)},
  'Portal': {name: str_(UIStrings.portal)},
  'SpeechRecognizer': {name: str_(UIStrings.speechRecognizer)},
  'IdleManager': {name: str_(UIStrings.idleManager)},
  'PaymentManager': {name: str_(UIStrings.paymentManager)},
  'SpeechSynthesis': {name: str_(UIStrings.speechSynthesis)},
  'KeyboardLock': {name: str_(UIStrings.keyboardLock)},
  'WebOTPService': {name: str_(UIStrings.webOTPService)},
  'OutstandingNetworkRequestDirectSocket': {name: str_(UIStrings.outstandingNetworkRequestDirectSocket)},
  'InjectedJavascript': {name: str_(UIStrings.injectedJavascript)},
  'InjectedStyleSheet': {name: str_(UIStrings.injectedStyleSheet)},
  'Dummy': {name: str_(UIStrings.internalError)},
  'ContentSecurityHandler': {name: str_(UIStrings.contentSecurityHandler)},
  'ContentWebAuthenticationAPI': {name: str_(UIStrings.contentWebAuthenticationAPI)},
  'ContentFileChooser': {name: str_(UIStrings.contentFileChooser)},
  'ContentSerial': {name: str_(UIStrings.contentSerial)},
  'ContentFileSystemAccess': {name: str_(UIStrings.contentFileSystemAccess)},
  'ContentMediaDevicesDispatcherHost': {name: str_(UIStrings.contentMediaDevicesDispatcherHost)},
  'ContentWebBluetooth': {name: str_(UIStrings.contentWebBluetooth)},
  'ContentWebUSB': {name: str_(UIStrings.contentWebUSB)},
  'ContentMediaSession': {name: str_(UIStrings.contentMediaSession)},
  'ContentMediaSessionService': {name: str_(UIStrings.contentMediaSessionService)},
  'ContentMediaPlay': {name: str_(UIStrings.contentMediaPlay)},
  'ContentScreenReader': {name: str_(UIStrings.contentScreenReader)},
  'EmbedderPopupBlockerTabHelper': {name: str_(UIStrings.embedderPopupBlockerTabHelper)},
  'EmbedderSafeBrowsingTriggeredPopupBlocker':
      {name: str_(UIStrings.embedderSafeBrowsingTriggeredPopupBlocker)},
  'EmbedderSafeBrowsingThreatDetails': {name: str_(UIStrings.embedderSafeBrowsingThreatDetails)},
  'EmbedderAppBannerManager': {name: str_(UIStrings.embedderAppBannerManager)},
  'EmbedderDomDistillerViewerSource': {name: str_(UIStrings.embedderDomDistillerViewerSource)},
  'EmbedderDomDistillerSelfDeletingRequestDelegate':
      {name: str_(UIStrings.embedderDomDistillerSelfDeletingRequestDelegate)},
  'EmbedderOomInterventionTabHelper': {name: str_(UIStrings.embedderOomInterventionTabHelper)},
  'EmbedderOfflinePage': {name: str_(UIStrings.embedderOfflinePage)},
  'EmbedderChromePasswordManagerClientBindCredentialManager':
      {name: str_(UIStrings.embedderChromePasswordManagerClientBindCredentialManager)},
  'EmbedderPermissionRequestManager': {name: str_(UIStrings.embedderPermissionRequestManager)},
  'EmbedderModalDialog': {name: str_(UIStrings.embedderModalDialog)},
  'EmbedderExtensions': {name: str_(UIStrings.embedderExtensions)},
  'EmbedderExtensionMessaging': {name: str_(UIStrings.embedderExtensionMessaging)},
  'EmbedderExtensionMessagingForOpenPort': {name: str_(UIStrings.embedderExtensionMessagingForOpenPort)},
  'EmbedderExtensionSentMessageToCachedFrame':
      {name: str_(UIStrings.embedderExtensionSentMessageToCachedFrame)},
  'ErrorDocument': {name: str_(UIStrings.errorDocument)},
  'FencedFramesEmbedder': {name: str_(UIStrings.fencedFramesEmbedder)},
  'KeepaliveRequest': {name: str_(UIStrings.keepaliveRequest)},
  'AuthorizationHeader': {name: str_(UIStrings.authorizationHeader)},
  'IndexedDBEvent': {name: str_(UIStrings.indexedDBEvent)},
  'CookieDisabled': {name: str_(UIStrings.cookieDisabled)},
};

export {
  NotRestoredReasonDescription,
  UIStrings,
};