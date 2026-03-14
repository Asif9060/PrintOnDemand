"use client";

import { X, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useCart } from "@/lib/cart-context";
import Button from "./Button";

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalItems, totalPrice } =
    useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
            onClick={closeCart}
          />

          {/* Drawer */}
          <motion.aside
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-[#FFF8F0] z-50 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-[#F0DCC8]">
              <div className="flex items-center gap-3">
                <ShoppingBag className="text-[#E85D04]" size={22} />
                <h2 className="font-display text-xl font-bold text-[#3D2B1F]">
                  Your Cart
                  {totalItems > 0 && (
                    <span className="ml-2 text-sm font-normal text-[#8B6F5E]">
                      ({totalItems} {totalItems === 1 ? "item" : "items"})
                    </span>
                  )}
                </h2>
              </div>
              <button
                onClick={closeCart}
                className="p-2 rounded-lg hover:bg-[#F0DCC8] transition-colors"
              >
                <X size={20} className="text-[#3D2B1F]" />
              </button>
            </div>

            {/* Items list */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
                  <div className="w-20 h-20 rounded-full bg-[#F0DCC8] flex items-center justify-center text-3xl">
                    🛒
                  </div>
                  <p className="text-[#8B6F5E] font-medium">Your cart is empty</p>
                  <p className="text-sm text-[#8B6F5E]">
                    Discover designs from artists around the world
                  </p>
                  <Button variant="primary" size="sm" onClick={closeCart}>
                    Start Shopping
                  </Button>
                </div>
              ) : (
                items.map((item) => (
                  <div
                    key={`${item.product.id}-${item.size}-${item.color.name}`}
                    className="flex gap-4 bg-white rounded-2xl p-4 shadow-sm border border-[#F0DCC8]"
                  >
                    <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-[#F0DCC8]">
                      <Image
                        src={item.product.image}
                        alt={item.product.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-[#3D2B1F] text-sm leading-tight truncate">
                        {item.product.title}
                      </h3>
                      <p className="text-xs text-[#8B6F5E] mt-0.5">by {item.product.artistName}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span
                          className="w-3 h-3 rounded-full border border-[#F0DCC8] flex-shrink-0"
                          style={{ backgroundColor: item.color.hex }}
                        />
                        <span className="text-xs text-[#8B6F5E]">{item.color.name}</span>
                        <span className="text-xs text-[#8B6F5E]">·</span>
                        <span className="text-xs text-[#8B6F5E]">{item.size}</span>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.size,
                                item.color.name,
                                item.quantity - 1
                              )
                            }
                            className="w-7 h-7 rounded-lg bg-[#F0DCC8] hover:bg-[#E8D0B8] flex items-center justify-center transition-colors"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="text-sm font-semibold w-5 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.size,
                                item.color.name,
                                item.quantity + 1
                              )
                            }
                            className="w-7 h-7 rounded-lg bg-[#F0DCC8] hover:bg-[#E8D0B8] flex items-center justify-center transition-colors"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-[#E85D04] text-sm">
                            ${(item.product.price * item.quantity).toFixed(2)}
                          </span>
                          <button
                            onClick={() =>
                              removeItem(item.product.id, item.size, item.color.name)
                            }
                            className="p-1 text-[#8B6F5E] hover:text-red-500 transition-colors"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-[#F0DCC8] p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[#8B6F5E]">Subtotal</span>
                  <span className="font-bold text-[#3D2B1F] text-lg">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
                <p className="text-xs text-[#8B6F5E]">
                  Shipping &amp; taxes calculated at checkout
                </p>
                <Button variant="primary" size="lg" fullWidth>
                  Checkout · ${totalPrice.toFixed(2)}
                </Button>
                <Button variant="outline" size="md" fullWidth onClick={closeCart}>
                  Continue Shopping
                </Button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
