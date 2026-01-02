import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Trash2, Plus, Minus } from "lucide-react";
import { Link } from "wouter";
import { useCart } from "@/contexts/CartContext";

export default function Cart() {
  const { items, removeItem, updateQuantity, getTotalPrice, clearCart } = useCart();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

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
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <ShoppingCart className="h-12 w-12" />
            <h1 className="text-4xl md:text-6xl font-heading font-bold">Shopping Cart</h1>
          </motion.div>
          <motion.p 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto text-primary-foreground/80"
          >
            Review your selected classes and proceed to checkout.
          </motion.p>
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-20 bg-background">
        <div className="container">
          {items.length === 0 ? (
            <div className="text-center py-20">
              <ShoppingCart className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
              <h2 className="text-3xl font-heading font-bold text-primary mb-4">Your cart is empty</h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Browse our classes and add them to your cart to get started with your Capoeira journey.
              </p>
              <Link href="/classes">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6">
                  Browse Classes
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden">
                  <div className="bg-secondary/10 p-6 border-b border-border">
                    <h2 className="text-2xl font-heading font-bold text-primary">
                      Items in Cart ({items.length})
                    </h2>
                  </div>
                  <div className="divide-y divide-border">
                    {items.map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="p-6 hover:bg-muted/30 transition-colors"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-primary mb-2">{item.name}</h3>
                            <p className="text-sm text-muted-foreground mb-3">{item.type}</p>
                            {item.schedule && (
                              <p className="text-sm text-muted-foreground mb-1">
                                <span className="font-medium">Schedule:</span> {item.schedule}
                              </p>
                            )}
                            {item.duration && (
                              <p className="text-sm text-muted-foreground">
                                <span className="font-medium">Duration:</span> {item.duration}
                              </p>
                            )}
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold text-primary mb-4">
                              £{(item.price * item.quantity).toFixed(2)}
                            </p>
                            <p className="text-sm text-muted-foreground mb-3">
                              £{item.price.toFixed(2)} each
                            </p>
                            
                            {/* Quantity Controls */}
                            <div className="flex items-center gap-2 border border-border rounded-lg p-2 mb-3 justify-end">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="p-1 hover:bg-muted rounded"
                              >
                                <Minus className="h-4 w-4 text-primary" />
                              </button>
                              <span className="w-8 text-center font-bold text-primary">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="p-1 hover:bg-muted rounded"
                              >
                                <Plus className="h-4 w-4 text-primary" />
                              </button>
                            </div>

                            {/* Remove Button */}
                            <button
                              onClick={() => removeItem(item.id)}
                              className="flex items-center gap-2 text-accent hover:text-accent/80 text-sm font-medium transition-colors"
                            >
                              <Trash2 className="h-4 w-4" />
                              Remove
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Continue Shopping */}
                <Link href="/classes">
                  <Button variant="outline" className="w-full mt-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground py-6 text-lg">
                    Continue Shopping
                  </Button>
                </Link>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl shadow-lg border border-border p-8 sticky top-32"
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

                  <Link href="/checkout">
                    <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold py-6 text-lg mb-3">
                      Proceed to Checkout
                    </Button>
                  </Link>

                  <Button 
                    variant="outline" 
                    onClick={() => clearCart()}
                    className="w-full border-accent text-accent hover:bg-accent hover:text-white"
                  >
                    Clear Cart
                  </Button>

                  <div className="mt-6 p-4 bg-muted/30 rounded-lg text-center">
                    <p className="text-sm text-muted-foreground">
                      Questions? <Link href="/contact" className="text-secondary font-bold hover:underline">Contact us</Link>
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
