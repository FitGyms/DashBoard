import { Header } from '@/components/header'


export default async function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode

}>) {
  
  return (
    <>
      <Header />
      <div className="flex min-h-screen flex-col items-center justify-center px-4">
       <div className="w-full max-w-5xl">{children}</div>
      </div>
    </>
  )
}
