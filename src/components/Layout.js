import Header from "./Header"

export default function Layout({ children }) {
  return (
    <div className="min-h-screen relative flex">
      <Header />
      <main className="min-h-screen w-full bg-white flex flex-col items-center justify-center">
        {children}
      </main>
    </div>
  )
}