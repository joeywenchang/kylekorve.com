interface BadgeProps {
  children: React.ReactNode
  href: string
}

export const Badge = (props: BadgeProps) => {
  return (
    <a
      href={props.href}
      target="_blank"
      className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline"
    >
      {props.children}
    </a>
  )
}
