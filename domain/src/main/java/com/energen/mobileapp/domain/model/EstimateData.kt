package com.energen.mobileapp.domain.model

import java.util.Date

data class EstimateData(
    val id: String,
    val surveyId: String, // To link with SurveyData
    val estimateDate: Date,
    val totalAmount: Double,
    val currency: String = "USD",
    val items: List<EstimateItem>,
    val notes: String = "",
    val status: String = "DRAFT" // e.g., DRAFT, SENT, ACCEPTED, REJECTED
)

data class EstimateItem(
    val description: String,
    val quantity: Int,
    val unitPrice: Double,
    val totalPrice: Double
)
