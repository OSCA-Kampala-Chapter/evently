import Navbar from './Navbar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div lang="en" className={'bg-[#111010]'}>
      <Navbar />
      <main>{children}</main>
    </div>
  )
}
