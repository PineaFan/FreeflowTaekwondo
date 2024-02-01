import Image from 'next/image';
import Styles from '../styles/components/footer.module.css';
import Link from 'next/link';


const packageList: Record<string, string> = {
    "Next.js": "https://nextjs.org/",
    "TypeScript": "https://typescriptlang.org/",
    "React": "https://reactjs.org/",
    "fast-fuzzy": "https://npmjs.com/package/fast-fuzzy",
    "react-animate-height": "https://npmjs.com/package/react-animate-height",
    "ical-toolkit": "https://npmjs.com/package/ical-toolkit",
    "chart.js": "https://npmjs.com/package/chart.js",
    "react-rewards": "https://npmjs.com/package/react-rewards",
}


export function Footer() {
    return <div className={Styles.background}>
        <p className={Styles.title}>Freeflow Taekwondo</p>
        <Link className={Styles.link} href="/">- Home</Link>
        <Link className={Styles.link} href="/checklist">- Grading checklist</Link>
        <Link className={Styles.link} href="https://facebook.com/tkdclasses/">- Facebook</Link>
        <br />
        <p className={Styles.text}>
            Made with
            <Image src="/icons/heart.svg" height={16} width={16} alt="love"/>
            by Ryan Franks
            <a href="https://github.com/PineaFan" className={Styles.link}>(@PineaFan)</a>
        </p>
        <p className={Styles.text}>
            Using
            { Object.keys(packageList).map((name, index) => { return <a
                key={index}
                className={Styles.link}
                href={packageList[name]}
            >{name}{index === Object.keys(packageList).length - 1 ? '' : ','}</a>
            })}
        </p>
        <p className={Styles.text}>
            Hosted by <Link className={Styles.link} href="https://vercel.com">Vercel</Link>
        </p>
    </div>
}
