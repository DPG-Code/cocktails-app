import Header from "./Header"

export default function Layout({ children }) {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mt-16 w-full">
        {children}
      </main>
    </div>
  )
}