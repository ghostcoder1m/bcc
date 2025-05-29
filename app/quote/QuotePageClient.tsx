"use client"

import { QuoteRequestForm } from "@/components/quote-request-form"
import { useSearchParams } from "next/navigation"

function QuotePageClient() {
  const searchParams = useSearchParams()
  const city = searchParams.get("city")

  return <QuoteRequestForm city={city} />
}

export default QuotePageClient
