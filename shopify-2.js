setInterval(() => {
        document.querySelectorAll("div[data-pf-type='Block']").forEach(e => {
                e.remove();
        })
    }, 200); 
