interface NavbarItemBasic {
  text: string
  link?: string
  icon?: string
}

interface NavbarItem extends NavbarItemBasic {
  children?: NavbarItemBasic[]
}

type Navbar = NavbarItem[]

export const navbar:Navbar = [
  {
    text: '面试题',
    link: '/series/audition/',
    icon: 'Document',
    children: [
      {
        text: 'HTML',
        link: '/series/audition/HTML',
      },
    ]
  },
  {
    text: '博客',
    link: '/posts.html',
    icon: 'Blog'
  }
]