package com.tonepolish.service.impl;

import com.tonepolish.dto.PolishingRequest;
import com.tonepolish.dto.PolishingResponse;
import com.tonepolish.service.PolishingService;
import org.springframework.stereotype.Service;

@Service
public class PolishingServiceImpl implements PolishingService {

    @Override
    public PolishingResponse polishText(PolishingRequest request) {
        String originalText = request.getOriginalText();
        String tone = request.getTone();
        
        String prompt = buildPrompt(originalText, tone);
        
        // TODO: Replace this mock implementation with actual OpenAI API call
        String polishedText = mockPolishText(originalText, tone);
        
        return new PolishingResponse(polishedText);
    }
    
    private String buildPrompt(String originalText, String tone) {
        String toneInstruction = switch (tone.toLowerCase()) {
            case "professional" -> "Rewrite the following text to sound professional, formal, and business-appropriate:";
            case "empathetic" -> "Rewrite the following text to sound empathetic, understanding, and compassionate:";
            case "concise" -> "Rewrite the following text to be more concise while preserving the key message:";
            default -> "Rewrite the following text:";
        };
        
        return toneInstruction + "\n\n" + originalText;
    }
    
    // TODO: Replace this mock implementation with actual OpenAI API call
    private String mockPolishText(String originalText, String tone) {
        // For now, return a mock response
        String prefix = switch (tone.toLowerCase()) {
            case "professional" -> "[Professional] ";
            case "empathetic" -> "[Empathetic] ";
            case "concise" -> "[Concise] ";
            default -> "[Polished] ";
        };
        
        return prefix + originalText + " (This is a mock response. Replace with actual OpenAI API integration.)";
    }
}


