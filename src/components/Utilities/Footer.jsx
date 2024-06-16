import { Copyright, FacebookLogo, GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react/dist/ssr"
import { HeartStraight } from "@phosphor-icons/react/dist/ssr"
const Footer = () => {
return(
<div>
    <footer className="mt-10 mb-5 undefined border-color-secondary border mx-2 rounded-lg"></footer>
    <div className="flex justify-center gap-2 items-center">

    <a href="https://github.com/fahrezyag">
    <GithubLogo size={32} color="#a3a3a3" />
    </a>
    <a href="https://www.instagram.com/fahrezyag">
    <InstagramLogo size={32} color="#a3a3a3" />
    </a>
    <a href="https://www.facebook.com/people/Fahrezy/pfbid0W5KL4yHecJteXtRT6mQN44u6XkDBQu17NkSczNuDAMcv3iVnZgxMDHiEcBXHBmEJl/">
    <FacebookLogo size={32} color="#a3a3a3" />
    </a>
    <a href="https://www.linkedin.com/in/fahrezy-ahmad-ghifari-238bb02a2/">
    <LinkedinLogo size={32} color="#a3a3a3" />
    </a>
    </div>
   
    <div className="mt-2 text-center text-color-variant flex items-center justify-center text-xs">
        
    Made with <HeartStraight size={25} color="#d62e2e" weight="fill" className="px-1"/>by 
    <a className="text-color-accent text-opacity-90 ml-1">

    fahrezy
    </a>
    </div>
    <a className="text-center text-color-variant flex items-center justify-center text-xs"><Copyright size={13} color="#a3a3a3" />2023 - 2024</a>
</div>
    )
}

export default Footer