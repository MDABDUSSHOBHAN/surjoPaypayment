// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { CheckCircle, AlertCircle } from "lucide-react";

// interface OrderData {
//   id: number;
//   order_id: string;
//   currency: string;
//   amount: number;
//   payable_amount: number;
//   discsount_amount: number | null;
//   disc_percent: number;
//   received_amount: string;
//   usd_amt: number;
//   usd_rate: number;
//   is_verify: number;
//   card_holder_name: string | null;
//   card_number: string | null;
//   phone_no: string;
//   bank_trx_id: string;
//   invoice_no: string;
//   bank_status: string;
//   customer_order_id: string;
//   sp_code: string;
//   sp_message: string;
//   name: string;
//   email: string;
//   address: string;
//   city: string;
//   value1: string | null;
//   value2: string | null;
//   value3: string | null;
//   value4: string | null;
//   transaction_status: string | null;
//   method: string;
//   date_time: string;
// }

// const orderData: OrderData = {
//   id: 79006,
//   order_id: "SP679010944bedd",
//   currency: "BDT",
//   amount: 79.96,
//   payable_amount: 79.96,
//   discsount_amount: null,
//   disc_percent: 0,
//   received_amount: "79.9600",
//   usd_amt: 0,
//   usd_rate: 0,
//   is_verify: 0,
//   card_holder_name: null,
//   card_number: null,
//   phone_no: "012345678901",
//   bank_trx_id: "6790109e",
//   invoice_no: "SP679010944bedd",
//   bank_status: "Success",
//   customer_order_id: "67901093e168387b8dd0bb3d",
//   sp_code: "1000",
//   sp_message: "Success",
//   name: "Ehtisam",
//   email: "xyz@gmail.com",
//   address: "N/A",
//   city: "N/A",
//   value1: null,
//   value2: null,
//   value3: null,
//   value4: null,
//   transaction_status: null,
//   method: "Nagad",
//   date_time: "2025-01-22 03:24:46",
// };

// export default function OrderVerification() {
//   const handleVerify = () => {
//     // Implement verification logic here
//     console.log("Order verified");
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-6">Order Verification</h1>
//       <div className="grid gap-6 md:grid-cols-2">
//         <Card>
//           <CardHeader>
//             <CardTitle>Order Details</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <dl className="grid grid-cols-2 gap-2">
//               <dt className="font-semibold">Order ID:</dt>
//               <dd>{orderData.order_id}</dd>
//               <dt className="font-semibold">Amount:</dt>
//               <dd>
//                 {orderData.currency} {orderData.amount.toFixed(2)}
//               </dd>
//               <dt className="font-semibold">Status:</dt>
//               <dd>
//                 <Badge
//                   variant={
//                     orderData.bank_status === "Success"
//                       ? "success"
//                       : "destructive"
//                   }
//                 >
//                   {orderData.bank_status}
//                 </Badge>
//               </dd>
//               <dt className="font-semibold">Date:</dt>
//               <dd>{new Date(orderData.date_time).toLocaleString()}</dd>
//             </dl>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader>
//             <CardTitle>Payment Information</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <dl className="grid grid-cols-2 gap-2">
//               <dt className="font-semibold">Method:</dt>
//               <dd>{orderData.method}</dd>
//               <dt className="font-semibold">Transaction ID:</dt>
//               <dd>{orderData.bank_trx_id}</dd>
//               <dt className="font-semibold">Invoice No:</dt>
//               <dd>{orderData.invoice_no}</dd>
//               <dt className="font-semibold">SP Code:</dt>
//               <dd>{orderData.sp_code}</dd>
//               <dt className="font-semibold">SP Message:</dt>
//               <dd>{orderData.sp_message}</dd>
//             </dl>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader>
//             <CardTitle>Customer Information</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <dl className="grid grid-cols-2 gap-2">
//               <dt className="font-semibold">Name:</dt>
//               <dd>{orderData.name}</dd>
//               <dt className="font-semibold">Email:</dt>
//               <dd>{orderData.email}</dd>
//               <dt className="font-semibold">Phone:</dt>
//               <dd>{orderData.phone_no}</dd>
//               <dt className="font-semibold">Address:</dt>
//               <dd>{orderData.address}</dd>
//               <dt className="font-semibold">City:</dt>
//               <dd>{orderData.city}</dd>
//             </dl>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader>
//             <CardTitle>Verification Status</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="flex items-center gap-2">
//               {orderData.is_verify === 1 ? (
//                 <>
//                   <CheckCircle className="text-green-500" />
//                   <span>Verified</span>
//                 </>
//               ) : (
//                 <>
//                   <AlertCircle className="text-yellow-500" />
//                   <span>Not Verified</span>
//                 </>
//               )}
//             </div>
//           </CardContent>
//           <CardFooter>
//             <Button onClick={handleVerify} disabled={orderData.is_verify === 1}>
//               {orderData.is_verify === 1 ? "Already Verified" : "Verify Order"}
//             </Button>
//           </CardFooter>
//         </Card>
//       </div>
//     </div>
//   );
// }
