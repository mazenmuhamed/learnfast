import { Navbar } from './_components/navbar'
import { DiscountBanner } from './_components/banner'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DiscountBanner />
      <Navbar />
      {children}
    </>
  )
}
