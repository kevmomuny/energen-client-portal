package com.energen.mobileapp.domain.model

import java.util.Date

data class ComplianceRequirement(
    val id: String,
    val name: String,
    val description: String,
    val authority: String, // e.g., EPA, Local Council
    val regulationCode: String, // e.g., "40 CFR Part 60"
    val effectiveDate: Date,
    val status: ComplianceStatus = ComplianceStatus.PENDING, // e.g., PENDING, MET, FAILED, NOT_APPLICABLE
    val notes: String = ""
)

enum class ComplianceStatus {
    PENDING,
    MET,
    FAILED,
    NOT_APPLICABLE
}
