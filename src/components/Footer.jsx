import  Logo  from "/src/assets/logo.png"

export default function Footer() {
    return (
        <footer>
            <div className="logo-wrapper">
                <strong>Coins</strong>
            </div>
            <ul className="foot-list">
                <li><a href="">News</a></li>
                <li><a href="">Contact us</a></li>
                <li><a href="">About us</a></li>
                <li><a href="">Terms of services</a></li>
                <li><a href="">Privacy Policy</a></li>
            </ul>
        </footer>
    )
}