import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";

export default function Checkout() {
  const { items, getTotalPrice, clearCart } = useCart();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postcode: "",
    country: "United Kingdom"
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setOrderComplete(true);
      clearCart();
    }, 2000);
  };

  if (items.length === 0 && !orderComplete) {
    return (
      <Layout>
        <section className="py-40 bg-background">
          <div className="container text-center">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">Your cart is empty</h2>
            <p className="text-muted-foreground mb-8">You need to add items to your cart before checking out.</p>
            <Link href="/classes">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Classes
              </Button>
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  if (orderComplete) {
    return (
      <Layout>
        <section className="py-40 bg-background">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-2xl mx-auto text-center"
            >
              <CheckCircle className="h-24 w-24 text-secondary mx-auto mb-6" />
              <h2 className="text-4xl font-heading font-bold text-primary mb-4">Order Confirmed!</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Thank you for your purchase. A confirmation email has been sent to {formData.email}
              </p>
              
              <div className="bg-white rounded-2xl shadow-sm border border-border p-8 mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">Order Details</h3>
                <div className="space-y-3 text-left mb-6 pb-6 border-b border-border">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between">
                      <span className="text-muted-foreground">
                        {item.name} x {item.quantity}
                      </span>
                      <span className="font-bold text-primary">
                        £{(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-lg font-bold text-primary">
                  <span>Total</span>
                  <span className="text-secondary">£{getTotalPrice().toFixed(2)}</span>
                </div>
              </div>

              <div className="bg-primary/5 rounded-2xl border border-primary/20 p-6 mb-8">
                <h4 className="font-bold text-primary mb-3">Next Steps</h4>
                <ul className="text-left space-y-2 text-muted-foreground">
                  <li>✓ A confirmation email will be sent shortly</li>
                  <li>✓ Check your email for class access details</li>
                  <li>✓ Our team will contact you to schedule your classes</li>
                  <li>✓ Start your Capoeira journey!</li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/classes">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6">
                    Browse More Classes
                  </Button>
                </Link>
                <Link href="/">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6">
                    Back to Home
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="/images/real/4c2900dd-dfa1-485b-a837-8a2061fe47ab.jpg" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-10 text-center">
          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-4xl md:text-6xl font-heading font-bold mb-6"
          >
            Checkout
          </motion.h1>
          <motion.p 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto text-primary-foreground/80"
          >
            Complete your purchase and get started with your classes.
          </motion.p>
        </div>
      </section>

      {/* Checkout Content */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl shadow-sm border border-border p-8"
              >
                <h2 className="text-2xl font-heading font-bold text-primary mb-6">Billing Information</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-primary mb-2">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-primary mb-2">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-primary mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-primary mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-primary mb-2">Address</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-primary mb-2">City</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-primary mb-2">Postcode</label>
                      <input
                        type="text"
                        name="postcode"
                        value={formData.postcode}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-primary mb-2">Country</label>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                      >
                        <option>United Kingdom</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button
                      type="submit"
                      disabled={isProcessing}
                      className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 disabled:opacity-50 font-bold py-6 text-lg"
                    >
                      {isProcessing ? "Processing..." : "Complete Purchase"}
                    </Button>
                  </div>
                </form>
              </motion.div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl shadow-sm border border-border p-8 sticky top-32"
              >
                <h3 className="text-2xl font-heading font-bold text-primary mb-6">Order Summary</h3>
                
                <div className="space-y-4 mb-6 pb-6 border-b border-border">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        {item.name} x {item.quantity}
                      </span>
                      <span className="font-bold text-primary">
                        £{(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-bold text-primary">£{getTotalPrice().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-bold text-primary">FREE</span>
                  </div>
                  <div className="flex justify-between py-3 border-t border-secondary/20">
                    <span className="font-bold text-primary text-lg">Total</span>
                    <span className="font-bold text-secondary text-lg">
                      £{getTotalPrice().toFixed(2)}
                    </span>
                  </div>
                </div>

                <Link href="/cart">
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground mb-3">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Cart
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
