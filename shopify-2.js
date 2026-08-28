setInterval(() => {
    document.querySelectorAll("div[data-pf-type='Block']").forEach(e => {
        if (!e.closest('.product-quest')) {
            e.remove();
        }
    });
}, 200);
