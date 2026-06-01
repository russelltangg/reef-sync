// Global messaging controller for cross-frame data syncing
window.addEventListener("message", (event) => {
    if (event.data && event.data.type === "UPDATE_GLOBAL_METRICS") {
        if (window.Alpine) {
            window.Alpine.store('appData').updateState(
                event.data.funds,
                event.data.plastic,
                event.data.score
            );
        }
    }
});

function dispatchSystemUpdate(fundsDelta, plasticDelta, scoreDelta) {
    window.parent.postMessage({
        type: "UPDATE_GLOBAL_METRICS",
        funds: fundsDelta,
        plastic: plasticDelta,
        score: scoreDelta
    }, "*");
}