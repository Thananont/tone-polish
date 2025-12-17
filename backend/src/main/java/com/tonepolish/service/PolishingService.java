package com.tonepolish.service;

import com.tonepolish.dto.PolishingRequest;
import com.tonepolish.dto.PolishingResponse;

public interface PolishingService {
    PolishingResponse polishText(PolishingRequest request);
}


