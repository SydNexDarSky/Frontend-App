import { useState } from "react"
import { Link } from "react-router-dom"

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    alert(`Logging in ${formData.email}`)
  }

  const handleClear = () => {
    setFormData({ email: "", password: "" })
  }

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-8">
      <div className="w-full max-w-2xl bg-white border border-slate-200 rounded-2xl shadow-lg p-6 md:p-10">
        <h1 className="text-3xl font-bold mb-2">Login</h1>
        <p className="text-slate-600 mb-6">Enter your email and password to access your account.</p>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
          <div>
            <label className="block mb-1 font-medium text-slate-700">Email</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 p-3 focus:border-blue-500 focus:outline-none"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-slate-700">Password</label>
            <input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 p-3 focus:border-blue-500 focus:outline-none"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="flex justify-end gap-3 mt-3">
            <button
              type="button"
              onClick={handleClear}
              className="px-5 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50"
            >
              Clear
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700"
            >
              Login
            </button>
          </div>
        </form>

        <div className="text-center mt-6 text-sm text-slate-600">
          Don't have an account? {" "}
          <Link to="/auth/signup" className="text-blue-600 hover:text-blue-700 font-semibold">
            Signup
          </Link>
        </div>
      </div>
    </div>
  )
}
