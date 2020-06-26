import React from 'react'

function Footer() {
    return (
        <footer className="text-center">
            <div className="copyright">
                © {new Date().getFullYear()} made by{" "}
                <a
                href="https://github.com/JahanzaibHussain"
                target="_blank" rel="noopener noreferrer"
                >
                @Zaib 
                </a>{" "} with{" "}
                <i className="tim-icons icon-heart-2" />
            </div>
        </footer>
    )
}

export default Footer
