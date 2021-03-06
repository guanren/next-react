import Link from 'next/link'
const linkStyle = {
    marginRight:15
}

const Header = () => (
    <div>
        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
            <a style={linkStyle}>About</a>
        </Link>
        <Link href="/redux">
            <a style={linkStyle}>redux</a>
        </Link>
        <Link href="/post">
            <a style={linkStyle}>post</a>
        </Link>
    </div>
)

export default Header;
