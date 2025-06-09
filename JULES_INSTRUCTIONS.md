# JULES TASK ASSIGNMENT: Domain Models
**JULES AGENT 3 - DOMAIN MODELS**
**Repository:** energen-client-portal
**Session Priority:** HIGH - Missing domain classes
**Estimated Time:** 20 minutes

## CORE MISSION:
Create all missing domain model classes, especially SurveyData and related entities that are causing compilation failures.

## SPECIFIC TASKS:

### 1. CREATE SURVEYDATA DOMAIN MODEL (10 minutes)
**Target:** `domain/src/main/java/com/energen/mobileapp/domain/model/SurveyData.kt`
```kotlin
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
```

### 2. CREATE SUPPORTING DOMAIN MODELS (5 minutes)
Create any additional domain models referenced in compilation errors:
- EstimateData
- ServicePackage
- ComplianceRequirement

### 3. CREATE DOMAIN EXTENSIONS (3 minutes)
Add any extension functions or utilities needed by domain models.

### 4. VERIFY DOMAIN LAYER PURITY (2 minutes)
Ensure domain models have no Android dependencies and are pure Kotlin.

## SUCCESS CRITERIA:
- ✅ SurveyData model created with all required fields
- ✅ Supporting domain models implemented
- ✅ No "unresolved reference: SurveyData" errors remain
- ✅ Domain layer remains pure (no Android dependencies)

## COORDINATION:
Update this file when complete:
```
JULES 3 STATUS: ✅ DOMAIN MODELS CREATED
- SurveyData and supporting models implemented
- Domain layer structure verified
- Ready for compilation testing
```

## REPOSITORY LOCATION:
Work in: `C:\Dev\energen-client-portal\`
Main project reference: `C:\energen-mobile-bid-tool\mobile-app\`
Branch: `fix/domain-models-wrapper`

---
JULES 3 STATUS: ✅ DOMAIN MODELS CREATED
- SurveyData and supporting models implemented
- Domain layer structure verified
- Ready for compilation testing
```
