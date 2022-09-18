import Header from "./Header"

export default function Layout({ children }) {
  return (
    <div className="min-h-screen relative">
      <Header />
      <main className="min-h-screen w-full bg-neutral-900 flex flex-col">
        {children}
      </main>
    </div>
  )
}