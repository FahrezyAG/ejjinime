import Link from "next/link"
import { DotOutline } from "@phosphor-icons/react/dist/ssr"

const Header = ({title, linkHref, linkTitle}) => {
    return (
<div className="px-6 pt-10 flex justify-between items-center">
        <h1 className="font-bold text-2xl text-color-primary lg:ml-3"><DotOutline size={32} weight="fill" className="absolute left-1 lg:ml-7"/>{title}</h1>
        {linkHref && linkTitle ?
      <Link href={linkHref} className="md:text-xl text-sm underline underline-offset-2 hover:text-color-accent text-color-primary">{linkTitle}.</Link>
      :null
      }
        
      </div>
    )
}

export default Header