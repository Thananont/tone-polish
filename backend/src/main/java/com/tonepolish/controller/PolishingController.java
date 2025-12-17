package com.tonepolish.controller;

import com.tonepolish.dto.PolishingRequest;
import com.tonepolish.dto.PolishingResponse;
import com.tonepolish.service.PolishingService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class PolishingController {

    private final PolishingService polishingService;

    @PostMapping("/polish")
    public ResponseEntity<PolishingResponse> polishText(@RequestBody PolishingRequest request) {
        PolishingResponse response = polishingService.polishText(request);
        return ResponseEntity.ok(response);
    }
}


