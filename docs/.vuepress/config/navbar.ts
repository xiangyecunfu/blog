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
      {
        text: 'CSS',
        link: '/series/audition/CSS',
      },
      {
        text: 'JavaScript',
        link: '/series/audition/JavaScript',
      },
      {
        text: 'Vue',
        link: '/series/audition/Vue',
      },
      {
        text: 'React',
        link: '/series/audition/React',
      },
    ]
  },
  {
    text: '博客',
    link: '/posts.html',
    icon: 'Blog'
  }
]