// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Badge } from "@/components/ui/badge";

// interface OrderDetailsProps {
//   order: Order;
// }

// export function OrderDetails({ order }: OrderDetailsProps) {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <Dialog open={isOpen} onOpenChange={setIsOpen}>
//       <DialogTrigger asChild>
//         <Button variant="outline">View Details</Button>
//       </DialogTrigger>
//       <DialogContent className="max-w-3xl">
//         <DialogHeader>
//           <DialogTitle>Order Details</DialogTitle>
//           <DialogDescription>Order ID: {order._id}</DialogDescription>
//         </DialogHeader>
//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <h3 className="font-semibold">Customer Information</h3>
//             <p>User ID: {order.user}</p>
//             <p>Order Date: {new Date(order.createdAt).toLocaleString()}</p>
//             <p>Last Updated: {new Date(order.updatedAt).toLocaleString()}</p>
//           </div>
//           <div>
//             <h3 className="font-semibold">Order Summary</h3>
//             <p>Total Price: ${order.totalPrice.toFixed(2)}</p>
//             <p>
//               Status:{" "}
//               <Badge
//                 variant={order.status === "Pending" ? "outline" : "default"}
//               >
//                 {order.status}
//               </Badge>
//             </p>
//           </div>
//           <div className="col-span-2">
//             <h3 className="font-semibold">Products</h3>
//             <ul>
//               {order.products.map((product) => (
//                 <li key={product._id}>
//                   Product ID: {product.product}, Quantity: {product.quantity}
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div className="col-span-2">
//             <h3 className="font-semibold">Transaction Details</h3>
//             <p>Transaction ID: {order.transaction.id}</p>
//             <p>Payment Method: {order.transaction.method}</p>
//             <p>Transaction Date: {order.transaction.date_time}</p>
//             <p>Transaction Status: {order.transaction.message}</p>
//           </div>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// }
