package com.energen.mobileapp.domain.model

import java.util.Date

data class SurveyData(
    val id: String,
    val clientName: String,
    val siteName: String,
    val address: String,
    val contactName: String,
    val contactEmail: String,
    val contactPhone: String,
    val surveyDate: Date,
    val generatorDetails: List<GeneratorDetail>,
    val clientNeeds: ClientNeeds,
    val estimatedCost: Double? = null,
    val notes: String = "",
    val status: SurveyStatus = SurveyStatus.DRAFT,
    val syncStatus: SyncStatus = SyncStatus.PENDING
)

data class GeneratorDetail(
    val id: String,
    val make: String,
    val model: String,
    val serialNumber: String,
    val fuelType: String,
    val capacity: String,
    val age: Int,
    val location: String,
    val condition: String,
    val photos: List<String> = emptyList()
)

data class ClientNeeds(
    val primaryConcerns: List<String>,
    val uptimeRequirements: String,
    val budgetConstraints: String,
    val currentPainPoints: List<String>,
    val desiredServiceLevel: String
)

enum class SurveyStatus {
    DRAFT,
    IN_PROGRESS,
    COMPLETED,
    SUBMITTED
}

enum class SyncStatus {
    PENDING,
    SYNCING,
    SYNCED,
    ERROR
}
