package com.energen.mobileapp.domain.model

data class ServicePackage(
    val id: String,
    val name: String,
    val description: String,
    val price: Double,
    val currency: String = "USD",
    val features: List<String>,
    val durationMonths: Int? = null // Optional: e.g., 12, 24 for contract length
)
