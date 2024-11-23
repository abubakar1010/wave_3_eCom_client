/* eslint-disable react/prop-types */
import React from "react";
import {
	Accordion,
	AccordionHeader,
	AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={2}
			stroke="currentColor"
			className={`${
				id === open ? "rotate-180" : ""
			} h-5 w-5 transition-transform`}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M19.5 8.25l-7.5 7.5-7.5-7.5"
			/>
		</svg>
	);
}
const FAQ = () => {
	const [open, setOpen] = React.useState(0);

	const faqs = [
		{
			id: 1,
			question: "How can I track my order?",
			answer:
				"Once your order is shipped, you will receive a tracking number via email. You can use this number on our 'Track Order' page to see the delivery status.",
		},
		{
			id: 2,
			question: "What is your return policy?",
			answer:
				"We offer a 30-day return policy. If you are not satisfied with your purchase, you can return it within 30 days for a full refund or exchange, provided the item is in its original condition.",
		},
		{
			id: 3,
			question: "Do you offer international shipping?",
			answer:
				"Yes, we ship to several countries worldwide. Shipping costs and delivery times vary depending on the destination. Check our shipping policy page for more details.",
		},
		{
			id: 4,
			question: "What payment methods do you accept?",
			answer:
				"We accept major credit and debit cards, PayPal, and other secure payment methods. All transactions are encrypted to ensure your data is safe.",
		},
		{
			id: 5,
			question: "How can I contact customer support?",
			answer:
				"You can reach our customer support team via email at support@example.com or through the contact form on our website. We’re available 24/7 to assist you.",
		},
	];
    

	const handleOpen = (value) => {setOpen(open === value ? 0 : value)};
	return (
		<>
			<div className=" text-center mt-4">
				<h1 className=" text-2xl font-semibold">Frequently Asked Questions</h1>
				<p className=" text-lg mt-2 px-24">
					Have questions? We’ve got answers! Browse through our FAQs to find
					solutions to common queries about orders, shipping, returns, and more.
				</p>
			</div>
			{faqs.map((item) => (
				<>
					<Accordion open={open === item.id} icon={<Icon id={item.id} open={open} />}>
						<AccordionHeader onClick={() => handleOpen(item.id)}>
							{item.question}
						</AccordionHeader>
						<AccordionBody>
							{item.answer}
						</AccordionBody>
					</Accordion>
				</>
			))}

		</>
	);
};

export default FAQ;
