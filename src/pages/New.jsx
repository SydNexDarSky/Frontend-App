import React, { useState, useEffect } from "react"

export default function New() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    alert(`Registering ${formData.firstName} ${formData.lastName}`)
    // TODO: send formData to your API or save in state/context
  }

  const handleClear = () => {
    setFormData({ firstName: "", lastName: "", email: "", password: "", phone: "", address: "" })
  }

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-8">
      <div className="w-full max-w-5xl bg-white border border-slate-200 rounded-2xl shadow-lg p-6 md:p-10">
        <h1 className="text-3xl font-bold mb-6">Signup - Personal Details</h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 font-medium text-slate-700">First Name</label>
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 p-3 focus:border-blue-500 focus:outline-none"
              placeholder="John"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-slate-700">Last Name</label>
            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 p-3 focus:border-blue-500 focus:outline-none"
              placeholder="Doe"
              required
            />
          </div>

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
              placeholder="••••••••"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-slate-700">Phone</label>
            <input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 p-3 focus:border-blue-500 focus:outline-none"
              placeholder="123-456-7890"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-slate-700">Address</label>
            <input
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 p-3 focus:border-blue-500 focus:outline-none"
              placeholder="123 Main St"
            />
          </div>

          <div className="md:col-span-2 flex justify-end gap-3 mt-3">
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
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

