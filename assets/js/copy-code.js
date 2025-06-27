function enhanceCodeBlocks() {
    document.querySelectorAll("pre").forEach((codeBlock) => {
        if (codeBlock.classList.contains("copy-enhanced")) return; // Prevent duplicate buttons
        codeBlock.classList.add("copy-enhanced");

        let button = document.createElement("button");
        button.className = "copy-button";
        button.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>`;

        codeBlock.appendChild(button);

        button.addEventListener("click", () => {
            let code = codeBlock.querySelector("code");
            if (code) {
                let text = code.innerText;
                navigator.clipboard.writeText(text).then(() => {
                    button.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>`;

                    setTimeout(() => {
                        button.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                        </svg>`;
                    }, 2000);
                });
            }
        });
    });
}

// Hook into page load for MkDocs Material
if (typeof document$ !== "undefined") {
    document$.subscribe(() => enhanceCodeBlocks());
} else {
    // Fallback for non-MkDocs sites
    if (document.readyState !== "loading") {
        enhanceCodeBlocks();
    } else {
        document.addEventListener("DOMContentLoaded", enhanceCodeBlocks);
    }
}
