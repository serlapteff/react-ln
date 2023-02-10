
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { type FC, useState } from 'react'
import { LangSwitcher } from 'widgets/LangSwitcher'

interface SidebarProps {
  className?: string
}
export const Sidebar: FC<SidebarProps> = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)

  const toggle: VoidFunction = () => {
    setCollapsed(prevState => !prevState)
  }

  return (
        <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <button onClick={toggle}>toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.langSwitcher} />
            </div>
        </div>
  )
}
