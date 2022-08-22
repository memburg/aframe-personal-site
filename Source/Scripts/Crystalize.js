AFRAME.registerComponent('crystalize', {
    schema: {
        opacity: { type: "number", default: 0.25 }
    },
    init: function () {
        this.el.addEventListener("model-loaded", this.update.bind(this));
    },
    update: function () {
        let mesh = this.el.getObject3D("mesh");
        let data = this.data;
        if (!mesh) {
            return;
        }
        mesh.traverse(function (node) {
            if (node.isMesh) {
                node.material.opacity = data.opacity;
                node.material.transparent = data.opacity < 1.0;
                node.material.needsUpdate = true;
            }
        });
    }
});