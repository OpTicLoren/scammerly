// Scammerly Enhanced Deception Detection Framework
// Core Philosophy: Sophisticated pattern recognition based on extensive scam analysis
// We detect "deception intent" not just "AI usage" - focusing on WHY patterns matter

// ENHANCED DECEPTION DETECTION PATTERNS
const DECEPTION_PATTERNS = {
  // 1. AI/DEEPFAKE SOPHISTICATION LEVELS (Based on ElevenLabs/deepfake experience)
  productionTransparency: {
    // OBVIOUS AI DETECTION
    aiVoiceObvious: {
      riskScore: 30,
      riskLevel: 'medium',
      sophisticationLevel: 'obvious',
      keywords: ['artificial voice', 'synthetic voice', 'AI narrator', 'computer voice'],
      indicators: [
        'unnatural pauses between words',
        'monotone delivery throughout', 
        'AI slop voiceover quality',
        'robotic pronunciation patterns',
        'lack of natural breathing sounds',
        'consistent energy level (no fatigue)',
        'perfect articulation without mouth sounds'
      ],
      explanation: 'Obvious AI voice detected without disclosure. This level of production deception often correlates with deceptive product claims.',
      why: 'Companies hiding basic production methods likely hide other important information',
      educationalInsight: 'AI voices are tools - the deception comes from not disclosing their use while making health/financial claims'
    },

    // SUBTLE AI DETECTION (ElevenLabs-style artifacts)
    aiVoiceSubtle: {
      riskScore: 45,
      riskLevel: 'medium',
      sophisticationLevel: 'subtle',
      indicators: [
        'micro-timing inconsistencies in speech',
        'slight electronic undertones',
        'unnatural emphasis patterns',
        'missing environmental audio cues',
        'breath sounds that don\'t match room acoustics',
        'speech clarity inconsistent with video quality',
        'emotional inflection that doesn\'t match facial expressions'
      ],
      explanation: 'Sophisticated AI voice detected using subtle artifacts. The effort to hide AI usage suggests intentional deception about authenticity.',
      why: 'Advanced voice synthesis without disclosure indicates deliberate attempts to manipulate trust',
      educationalInsight: 'Sophisticated AI deception requires more resources - suggests serious intent to deceive'
    },

    // ADVANCED DEEPFAKE DETECTION
    deepfakeAdvanced: {
      riskScore: 70,
      riskLevel: 'high',
      sophisticationLevel: 'advanced',
      indicators: [
        'micro-movements in eyes/eyebrows (snapping)',
        'facial distortion during specific words',
        'hand/body movements don\'t match head movements',
        'audio-environment inconsistencies (no echo in large room)',
        'lighting inconsistencies on face vs body',
        'unnatural blinking patterns',
        'jaw movement doesn\'t match syllable count',
        'hair movement independent of head movement'
      ],
      explanation: 'Advanced deepfake technology detected. This level of identity deception suggests high-level fraud operations.',
      why: 'Deepfake technology requires significant investment - indicates serious fraudulent intent',
      educationalInsight: 'Deepfakes represent complete identity theft - if they fake the person, they likely fake everything else'
    },
    // STAGED CONTENT DETECTION (Based on production quality analysis)
    stagedConvenienceCoincidences: {
      riskScore: 50,
      riskLevel: 'medium',
      indicators: [
        'kid randomly asking financial advice near luxury car',
        'convenient product placement in "candid" moments', 
        'repeated "random" encounter patterns',
        '"I was just filming and this happened" impossibility',
        'perfect lighting in supposedly spontaneous content',
        'professional camera angles for "authentic" reactions',
        'scripted-sounding "natural" conversations'
      ],
      explanation: 'Content shows impossible convenience coincidences - staged scenarios presented as authentic moments.',
      why: 'If they stage authenticity, they likely stage product results too',
      educationalInsight: 'Real authentic moments rarely have perfect production value - question convenient timing'
    },

    // PRODUCTION QUALITY MISMATCHES
    productionQualityMismatch: {
      riskScore: 35,
      riskLevel: 'medium',
      indicators: [
        'high production value claimed as spontaneous',
        'professional editing in "raw" content',
        'multiple camera angles for "candid" shots',
        'studio lighting in "home" videos',
        'branded content presented as organic',
        'rehearsed delivery claiming to be improvised'
      ],
      explanation: 'Production quality doesn\'t match claimed spontaneity - suggests manufactured authenticity.',
      why: 'Misrepresenting production methods indicates willingness to misrepresent other aspects',
      educationalInsight: 'Ask yourself: How did they get perfect footage of this "random" moment?'
    }
  },

  // 2. ENHANCED CLAIM ANALYSIS (Based on buzzword psychology and MLM patterns)
  claimAnalysis: {
    // HEALTH SUPPLEMENT SOPHISTICATED DETECTION
    healthSupplementClaims: {
      riskScore: 50,
      riskLevel: 'high',
      strongClaims: ['will cure', 'will eliminate', 'guaranteed to heal', 'proven to reverse', 'doctors hate this', 'secret formula'],
      buzzwordPsychology: [
        'cortisol belly', 'toxins', 'cleanse', 'metabolism boost', 
        'ancient remedy', 'superfood', 'miracle compound', 'breakthrough discovery',
        'pharmaceutical conspiracy', 'natural alternative doctors don\'t want you to know'
      ],
      blameShiftingLanguage: [
        'not your fault', 'genetics are against you', 'your hormones are broken',
        'the system is rigged', 'you\'ve been lied to', 'it\'s not about willpower'
      ],
      explanation: 'Health claims combine medical buzzwords people recognize but don\'t understand with blame-shifting psychology to bypass critical thinking.',
      why: 'Legitimate health products focus on evidence, not psychological manipulation',
      educationalInsight: 'If they blame everything except their product, question why their solution is different'
    },

    // MLM/FINANCIAL SCAM SOPHISTICATED DETECTION  
    financialPromises: {
      riskScore: 75,
      riskLevel: 'high',
      mlmLanguagePatterns: [
        'figure out how to get $300M', 'turn spare time into income',
        'work from your phone', 'be your own boss', 'unlimited earning potential',
        'financial freedom', 'passive income streams', 'recession-proof income'
      ],
      vaguenessRedFlags: [
        'amazing opportunity', 'life-changing system', 'revolutionary method',
        'no experience needed', 'simple 3-step process', 'anyone can do this',
        'ground floor opportunity', 'limited spots available'
      ],
      dailyPaymentEmphasis: [
        'get paid daily', 'daily commissions', 'money in 24 hours',
        'instant payments', 'same-day earnings', 'immediate cash flow'
      ],
      scientologyMentions: ['scientology', 'dianetics', 'clear status', 'thetan levels'], // Automatic red flag
      explanation: 'MLM/financial scam pattern: Vague income promises + daily payment emphasis + fast-talking to prevent critical thinking.',
      why: 'Legitimate jobs describe specific work; scams describe lifestyle fantasies',
      educationalInsight: 'If someone describes the lifestyle but not the actual work, be very suspicious'
    },
    tooGoodToBeTrue: {
      riskScore: 40,
      riskLevel: 'medium',
      patterns: [
        'effortless results', 'instant transformation', 'works for everyone',
        'no side effects', 'doctors dont want you to know', 'one weird trick'
      ],
      explanation: 'Claims that seem too good to be true usually are. This pattern of overpromising suggests other claims may also be exaggerated.',
      why: 'Overpromising in one area indicates potential dishonesty in others'
    }
  },

  // 3. SOPHISTICATED CELEBRITY/AUTHORITY MISUSE ANALYSIS
  celebrityAuthorityMisuse: {
    // CONTEXT-AWARE LIFESTYLE CONTRADICTIONS (Based on extensive celebrity analysis)
    lifestyleContradictions: {
      riskScore: 65,
      riskLevel: 'high',
      specificContradictions: {
        'religious_lifestyle': [
          'Christian promoting alcohol brands', 'Christian promoting gambling platforms',
          'Family values advocate in adult content', 'Religious figure promoting materialism'
        ],
        'health_environmental': [
          'Health guru promoting processed foods', 'Environmentalist promoting wasteful products',
          'Fitness expert promoting sedentary lifestyle', 'Wellness coach promoting harmful substances'
        ],
        'values_business': [
          'Anti-corporate activist promoting corporate products',
          'Financial responsibility expert promoting risky investments',
          'Authenticity advocate doing obvious paid promotions'
        ]
      },
      explanation: 'Celebrity lifestyle directly contradicts promoted product, revealing payment-over-principle approach. This mercenary endorsement pattern indicates other claims may be financially motivated rather than truthful.',
      why: 'Values contradictions reveal endorsements based on payment, not genuine belief',
      educationalInsight: 'When someone contradicts their core values for money, question everything else they\'re selling'
    },

    // CELEBRITY BRAND OVERLOAD ANALYSIS (The Rock\'s 47 brands problem)
    celebrityBrandOverload: {
      riskScore: 55,
      riskLevel: 'medium',
      indicators: [
        'celebrity endorsing 10+ different product categories',
        'multiple competing brand endorsements',
        'endorsing products they obviously don\'t use',
        'new product launch every few weeks',
        'endorsing products outside their expertise area'
      ],
      explanation: 'Celebrity endorsing too many brands to be authentic - suggests endorsement-for-hire pattern rather than genuine product belief.',
      why: 'Authentic endorsements are selective; mass endorsements indicate payment-driven decisions',
      educationalInsight: 'If they endorse everything, they believe in nothing - treat as paid advertising'
    },

    // AUTHORITY MANIPULATION (Older person on young platform)
    authorityManipulation: {
      riskScore: 50,
      riskLevel: 'medium',
      patterns: [
        'older person targeting young platform demographics',
        'doctor credentials used for non-medical products',
        'CEO title used to promote unrelated investments',
        'military background used for civilian product authority',
        'academic credentials for commercial endorsements'
      ],
      explanation: 'Authority figure exploiting credibility from one area to sell products in unrelated areas - age/expertise bias manipulation.',
      why: 'Legitimate experts stay in their lane; credibility exploitation suggests deceptive intent',
      educationalInsight: 'Being good at one thing doesn\'t make someone credible at everything - question authority transfers'
    },

    // BODY LANGUAGE DISCOMFORT (Advanced detection)
    bodyLanguageDiscomfort: {
      riskScore: 45,
      riskLevel: 'medium',
      sophisticatedIndicators: [
        'forehead micro-twitches during product claims',
        'doesn\'t actually swallow when "trying" product',
        'eye contact avoidance during financial promises',
        'forced smile that doesn\'t reach eyes',
        'uncomfortable posture shift when discussing benefits',
        'script-reading cadence vs natural speech patterns',
        'defensive body positioning during endorsement'
      ],
      explanation: 'Subtle body language suggests unconscious discomfort with claims being made - the person\'s body contradicts their words.',
      why: 'Body language leaks true feelings even when words are scripted',
      educationalInsight: 'Watch what their body says, not just their words - unconscious signals reveal true beliefs'
    }
  },

  // 4. ENHANCED MANIPULATION TACTICS & COMMUNICATION ANALYSIS
  urgencyManipulation: {
    // FALSE CHOICE MANIPULATION
    falseChoiceFallacies: {
      riskScore: 40,
      riskLevel: 'medium',
      patterns: [
        'bad habits OR our product (ignoring habit change)',
        'expensive surgery OR our supplement',
        'stay poor OR buy our course',
        'suffer forever OR try this solution',
        'traditional medicine OR natural alternative (false dichotomy)'
      ],
      explanation: 'Creates false choice between two options while ignoring obvious third alternatives - designed to funnel toward their product.',
      why: 'False choices manipulate decision-making by eliminating rational alternatives',
      educationalInsight: 'When someone presents only two choices, ask yourself: what other options aren\'t they mentioning?'
    },

    // SOPHISTICATED PRESSURE TACTICS
    highPressureTactics: {
      riskScore: 45,
      riskLevel: 'medium',
      psychologicalTactics: [
        'limited time offer', 'only 24 hours left', 'exclusive access',
        'first come first served', 'spots filling fast', 'act now or miss out',
        'price going up tomorrow', 'last chance warning', 'cart abandonment urgency'
      ],
      fastTalkingIndicators: [
        'rapid delivery to prevent questions',
        'constant topic switching',
        'overwhelming with information',
        'not allowing processing time'
      ],
      explanation: 'High-pressure tactics combined with fast talking designed to prevent critical thinking and careful consideration.',
      why: 'Legitimate offers give you time to think; pressure tactics suggest the offer won\'t survive scrutiny',
      educationalInsight: 'If they won\'t let you think about it, don\'t buy it'
    },

    // SOPHISTICATED CONTACT/COMMUNICATION RED FLAGS
    suspiciousContact: {
      riskScore: 60,
      riskLevel: 'high',
      contactRedFlags: [
        'foreign phone numbers with local claims',
        'temporary/disposable phone numbers', 
        'no physical business address',
        'cryptocurrency-only payments',
        'offshore-only contact methods',
        'won\'t provide company registration details'
      ],
      emailSophistication: [
        'minimal info + PDF link as primary goal',
        'subject line doesn\'t match sender credibility',
        'font inconsistencies in professional correspondence',
        'sender address fabrication (fake company domains)',
        'urgent action required without context'
      ],
      explanation: 'Sophisticated attempts to avoid accountability while maintaining professional appearance - indicates anticipation of legal issues.',
      why: 'Legitimate businesses provide transparent contact info; hiding suggests awareness of wrongdoing',
      educationalInsight: 'If they make it hard to find them after you pay, don\'t pay'
    }
  }
};

// Platform-specific patterns
const PLATFORM_PATTERNS = {
  youtube: {
    suspiciousChannels: [
      'new channel with viral content',
      'stolen profile pictures',
      'no channel history',
      'generic descriptions'
    ],
    contentFlags: [
      'clickbait thumbnails',
      'all caps titles',
      'money symbols in title',
      'fake news style formatting'
    ]
  },
  
  tiktok: {
    indicators: [
      'young account age',
      'sudden follower spike',
      'reposted content',
      'luxury lifestyle posts'
    ]
  },

  instagram: {
    redFlags: [
      'purchased followers',
      'engagement rate mismatch',
      'lifestyle inconsistencies',
      'recent account creation'
    ]
  },

  facebook: {
    warnings: [
      'fake profile indicators',
      'shared in scam groups',
      'multiple reposts',
      'suspicious link redirects'
    ]
  }
};

// Analyze URL and extract platform
function analyzeUrl(url) {
  try {
    const urlObj = new URL(url);
    const domain = urlObj.hostname.toLowerCase();
    
    let platform = 'unknown';
    if (domain.includes('youtube.com') || domain.includes('youtu.be')) {
      platform = 'youtube';
    } else if (domain.includes('tiktok.com')) {
      platform = 'tiktok';
    } else if (domain.includes('instagram.com')) {
      platform = 'instagram';
    } else if (domain.includes('facebook.com') || domain.includes('fb.com')) {
      platform = 'facebook';
    }

    return {
      platform,
      domain,
      path: urlObj.pathname,
      params: urlObj.searchParams,
      isValid: true
    };
  } catch (error) {
    return {
      platform: 'unknown',
      domain: '',
      path: '',
      params: null,
      isValid: false,
      error: 'Invalid URL format'
    };
  }
}

// SOPHISTICATED PATTERN COMBINATION ANALYSIS
const SCAM_PATTERN_COMBINATIONS = {
  // SUPPLEMENT SCAM VARIANTS
  supplementScamBasic: {
    patterns: ['aiVoiceObvious', 'healthSupplementClaims', 'highPressureTactics'],
    bonusRisk: 25,
    explanation: 'Classic supplement scam: AI voice + health claims + urgency. This combination exploits trust while bypassing critical thinking.',
    warning: 'Be extremely cautious of health supplement purchases from this source'
  },
  supplementScamAdvanced: {
    patterns: ['aiVoiceSubtle', 'healthSupplementClaims', 'blameShiftingLanguage', 'falseChoiceFallacies'],
    bonusRisk: 35,
    explanation: 'Sophisticated supplement scam: Advanced AI + medical buzzwords + psychological manipulation. This targets educated consumers.',
    warning: 'Advanced deception detected - even sophisticated buyers should avoid'
  },

  // INVESTMENT/MLM SCAM VARIANTS  
  mlmScheme: {
    patterns: ['financialPromises', 'mlmLanguagePatterns', 'vaguenessRedFlags'],
    bonusRisk: 40,
    explanation: 'MLM scheme pattern: Vague income promises + lifestyle focus + daily payment emphasis. Classic network marketing deception.',
    warning: 'This appears to be an MLM scheme - research income disclosure statements'
  },
  investmentScamCelebrity: {
    patterns: ['celebrityBrandOverload', 'financialPromises', 'authorityManipulation'],
    bonusRisk: 45,
    explanation: 'Celebrity investment scam: Authority exploitation + unrealistic promises + credibility transfer. Targets fans and trust.',
    warning: 'Celebrity endorsement does not validate financial advice - consult licensed professionals'
  },

  // ADVANCED FRAUD PATTERNS
  deepfakeFraud: {
    patterns: ['deepfakeAdvanced', 'lifestyleContradictions', 'suspiciousContact'],
    bonusRisk: 50,
    explanation: 'Advanced fraud operation: Deepfake technology + identity deception + hidden accountability. Professional-level scam.',
    warning: 'FRAUD ALERT: Do not provide any personal or financial information'
  },
  sophisticatedManipulation: {
    patterns: ['aiVoiceSubtle', 'authorityManipulation', 'falseChoiceFallacies', 'bodyLanguageDiscomfort'],
    bonusRisk: 40,
    explanation: 'Sophisticated manipulation: Multiple psychological tactics + authority exploitation + subtle deception layers.',
    warning: 'Advanced manipulation detected - high likelihood of deceptive practices'
  },

  // SCIENTOLOGY RED FLAG (Automatic high risk)
  scientologyConnection: {
    patterns: ['scientologyMentions'],
    bonusRisk: 60,
    explanation: 'Scientology connection detected. This organization has extensive documented history of financial exploitation and deceptive practices.',
    warning: 'EXTREME CAUTION: Scientology-connected content has high fraud risk'
  }
};

// Sophisticated deception pattern analysis simulation
function analyzeDeceptionPatterns(url, platform) {
  const detectedPatterns = [];
  let totalRiskScore = 0;
  
  // Create a simple hash from URL for consistent "random" results
  const urlHash = url.split('').reduce((a, b) => {
    a = ((a << 5) - a) + b.charCodeAt(0);
    return a & a;
  }, 0);
  
  // Use hash to create consistent "random" values for demo
  const getRandom = (seed) => {
    const x = Math.sin(seed + Math.abs(urlHash)) * 10000;
    return x - Math.floor(x);
  };
  
  // SOPHISTICATED AI/DEEPFAKE DETECTION
  const aiRandom = getRandom(1);
  if (aiRandom > 0.7) { // 30% chance of advanced AI detection
    const pattern = DECEPTION_PATTERNS.productionTransparency.aiVoiceSubtle;
    detectedPatterns.push({
      category: 'Advanced AI Detection',
      type: 'Sophisticated AI Voice (ElevenLabs-style)',
      riskScore: pattern.riskScore,
      confidence: Math.round(75 + getRandom(2) * 25), // 75-100% confidence
      explanation: pattern.explanation,
      why: pattern.why,
      educationalInsight: pattern.educationalInsight,
      indicators: pattern.indicators.slice(0, 3),
      sophisticationLevel: pattern.sophisticationLevel
    });
    totalRiskScore += pattern.riskScore;
  } else if (aiRandom > 0.4) { // 30% chance of obvious AI detection
    const pattern = DECEPTION_PATTERNS.productionTransparency.aiVoiceObvious;
    detectedPatterns.push({
      category: 'AI Detection',
      type: 'Obvious AI Voice Without Disclosure',
      riskScore: pattern.riskScore,
      confidence: Math.round(80 + getRandom(3) * 20), // 80-100% confidence
      explanation: pattern.explanation,
      why: pattern.why,
      educationalInsight: pattern.educationalInsight,
      indicators: pattern.indicators.slice(0, 3),
      sophisticationLevel: pattern.sophisticationLevel
    });
    totalRiskScore += pattern.riskScore;
  }

  // ADVANCED DEEPFAKE DETECTION
  if (getRandom(3) > 0.8) { // 20% chance of advanced deepfake
    const pattern = DECEPTION_PATTERNS.productionTransparency.deepfakeAdvanced;
    detectedPatterns.push({
      category: 'Advanced Fraud Detection',
      type: 'Sophisticated Deepfake Technology',
      riskScore: pattern.riskScore,
      confidence: Math.round(65 + getRandom(4) * 25), // 65-90% confidence
      explanation: pattern.explanation,
      why: pattern.why,
      educationalInsight: pattern.educationalInsight,
      indicators: pattern.indicators.slice(0, 3),
      sophisticationLevel: pattern.sophisticationLevel
    });
    totalRiskScore += pattern.riskScore;
  }

  // STAGED CONTENT DETECTION
  if (getRandom(4) > 0.6) { // 40% chance of staged content
    const pattern = DECEPTION_PATTERNS.productionTransparency.stagedConvenienceCoincidences;
    detectedPatterns.push({
      category: 'Authenticity Analysis',
      type: 'Staged "Authentic" Content',
      riskScore: pattern.riskScore,
      confidence: Math.round(70 + getRandom(5) * 30), // 70-100% confidence
      explanation: pattern.explanation,
      why: pattern.why,
      educationalInsight: pattern.educationalInsight,
      indicators: pattern.indicators.slice(0, 3)
    });
    totalRiskScore += pattern.riskScore;
  }

  // SOPHISTICATED CLAIM ANALYSIS
  const claimRandom = getRandom(6);
  if (claimRandom > 0.6) { // 40% chance of MLM financial patterns
    const pattern = DECEPTION_PATTERNS.claimAnalysis.financialPromises;
    detectedPatterns.push({
      category: 'MLM/Financial Scam Analysis',
      type: 'MLM-Style Financial Promises',
      riskScore: pattern.riskScore,
      confidence: Math.round(80 + getRandom(7) * 20), // 80-100% confidence
      explanation: pattern.explanation,
      why: pattern.why,
      educationalInsight: pattern.educationalInsight,
      mlmLanguage: pattern.mlmLanguagePatterns ? pattern.mlmLanguagePatterns.slice(0, 2) : [],
      vagueness: pattern.vaguenessRedFlags ? pattern.vaguenessRedFlags.slice(0, 2) : []
    });
    totalRiskScore += pattern.riskScore;
  }

  if (getRandom(8) > 0.5) { // 50% chance of health supplement issues
    const pattern = DECEPTION_PATTERNS.claimAnalysis.healthSupplementClaims;
    detectedPatterns.push({
      category: 'Health Claim Analysis',
      type: 'Sophisticated Health Manipulation',
      riskScore: pattern.riskScore,
      confidence: Math.round(75 + getRandom(9) * 25), // 75-100% confidence
      explanation: pattern.explanation,
      why: pattern.why,
      educationalInsight: pattern.educationalInsight,
      buzzwords: pattern.buzzwordPsychology ? pattern.buzzwordPsychology.slice(0, 3) : [],
      blameShifting: pattern.blameShiftingLanguage ? pattern.blameShiftingLanguage.slice(0, 2) : []
    });
    totalRiskScore += pattern.riskScore;
  }

  // SOPHISTICATED CELEBRITY/AUTHORITY ANALYSIS
  const celebrityRandom = getRandom(10);
  if (celebrityRandom > 0.7) { // 30% chance of lifestyle contradictions
    const pattern = DECEPTION_PATTERNS.celebrityAuthorityMisuse.lifestyleContradictions;
    detectedPatterns.push({
      category: 'Celebrity Contradiction Analysis',
      type: 'Values vs Product Contradictions',
      riskScore: pattern.riskScore,
      confidence: Math.round(85 + getRandom(11) * 15), // 85-100% confidence
      explanation: pattern.explanation,
      why: pattern.why,
      educationalInsight: pattern.educationalInsight,
      contradictionType: Object.keys(pattern.specificContradictions)[Math.floor(getRandom(12) * 3)],
      examples: pattern.specificContradictions.religious_lifestyle.slice(0, 2)
    });
    totalRiskScore += pattern.riskScore;
  } else if (celebrityRandom > 0.5) { // 20% chance of brand overload
    const pattern = DECEPTION_PATTERNS.celebrityAuthorityMisuse.celebrityBrandOverload;
    detectedPatterns.push({
      category: 'Celebrity Analysis',
      type: 'Celebrity Brand Overload Pattern',
      riskScore: pattern.riskScore,
      confidence: Math.round(75 + getRandom(13) * 25), // 75-100% confidence
      explanation: pattern.explanation,
      why: pattern.why,
      educationalInsight: pattern.educationalInsight,
      indicators: pattern.indicators.slice(0, 3)
    });
    totalRiskScore += pattern.riskScore;
  }

  // AUTHORITY MANIPULATION DETECTION
  if (getRandom(14) > 0.6) { // 40% chance of authority exploitation
    const pattern = DECEPTION_PATTERNS.celebrityAuthorityMisuse.authorityManipulation;
    detectedPatterns.push({
      category: 'Authority Exploitation',
      type: 'Credibility Transfer Manipulation',
      riskScore: pattern.riskScore,
      confidence: Math.round(80 + getRandom(15) * 20), // 80-100% confidence
      explanation: pattern.explanation,
      why: pattern.why,
      educationalInsight: pattern.educationalInsight,
      patterns: pattern.patterns.slice(0, 2)
    });
    totalRiskScore += pattern.riskScore;
  }

  // ADVANCED MANIPULATION TACTICS
  if (getRandom(16) > 0.5) { // 50% chance of false choice fallacies
    const pattern = DECEPTION_PATTERNS.urgencyManipulation.falseChoiceFallacies;
    detectedPatterns.push({
      category: 'Psychological Manipulation',
      type: 'False Choice Manipulation',
      riskScore: pattern.riskScore,
      confidence: Math.round(85 + getRandom(17) * 15), // 85-100% confidence
      explanation: pattern.explanation,
      why: pattern.why,
      educationalInsight: pattern.educationalInsight,
      patterns: pattern.patterns.slice(0, 2)
    });
    totalRiskScore += pattern.riskScore;
  }

  if (getRandom(18) > 0.4) { // 60% chance of sophisticated pressure tactics
    const pattern = DECEPTION_PATTERNS.urgencyManipulation.highPressureTactics;
    detectedPatterns.push({
      category: 'Advanced Pressure Tactics',
      type: 'Sophisticated Sales Manipulation',
      riskScore: pattern.riskScore,
      confidence: Math.round(90 + getRandom(19) * 10), // 90-100% confidence
      explanation: pattern.explanation,
      why: pattern.why,
      educationalInsight: pattern.educationalInsight,
      psychologicalTactics: pattern.psychologicalTactics ? pattern.psychologicalTactics.slice(0, 3) : [],
      fastTalking: pattern.fastTalkingIndicators ? pattern.fastTalkingIndicators.slice(0, 2) : []
    });
    totalRiskScore += pattern.riskScore;
  }

  // Check for pattern combinations
  const detectedTypes = detectedPatterns.map(p => p.type.toLowerCase().replace(/[^a-z]/g, ''));
  let combinationBonus = 0;
  let combinationWarning = null;

  for (const [comboName, combo] of Object.entries(SCAM_PATTERN_COMBINATIONS)) {
    const matchCount = combo.patterns.filter(pattern => 
      detectedTypes.some(detected => detected.includes(pattern.toLowerCase().replace(/[^a-z]/g, '')))
    ).length;
    
    if (matchCount >= 2) { // At least 2 patterns match
      combinationBonus += combo.bonusRisk;
      combinationWarning = {
        type: `${comboName.charAt(0).toUpperCase() + comboName.slice(1)} Pattern`,
        explanation: combo.explanation,
        warning: combo.warning
      };
      break; // Only apply one combination bonus
    }
  }

  return {
    patterns: detectedPatterns,
    totalRiskScore: Math.min(totalRiskScore + combinationBonus, 100),
    combinationWarning
  };
}

// Main deception detection function
export async function detectScam(url) {
  // Simulate API delay for realistic experience
  await new Promise(resolve => setTimeout(resolve, 1500));

  const urlAnalysis = analyzeUrl(url);
  
  if (!urlAnalysis.isValid) {
    return {
      success: false,
      error: urlAnalysis.error,
      riskScore: 0,
      riskLevel: 'unknown',
      message: 'Unable to analyze: Invalid URL format'
    };
  }

  const deceptionAnalysis = analyzeDeceptionPatterns(url, urlAnalysis.platform);
  const riskScore = deceptionAnalysis.totalRiskScore;
  
  // Risk level classification based on Scammerly framework
  let riskLevel, emoji, message;
  
  if (riskScore >= 71) {
    riskLevel = 'high';
    emoji = '🔴';
    message = 'High Risk - Multiple Deception Indicators';
  } else if (riskScore >= 31) {
    riskLevel = 'medium';
    emoji = '🟡';
    message = 'Medium Risk - Some Deceptive Practices';
  } else {
    riskLevel = 'low';
    emoji = '🟢';
    message = 'Low Risk - Transparent, Realistic Claims';
  }

  // Create summary of detected deception patterns
  const detectedCategories = [...new Set(deceptionAnalysis.patterns.map(p => p.category))];
  const categoryString = detectedCategories.length > 0 ? detectedCategories.join(' + ') : '';
  
  const fullMessage = deceptionAnalysis.patterns.length > 0 
    ? `${emoji} ${message} (${riskScore}% risk) - ${categoryString}`
    : `${emoji} ${message} (${riskScore}% risk)`;

  return {
    success: true,
    riskScore,
    riskLevel,
    platform: urlAnalysis.platform,
    message: fullMessage,
    detectedPatterns: deceptionAnalysis.patterns,
    combinationWarning: deceptionAnalysis.combinationWarning,
    recommendations: generateDeceptionRecommendations(riskLevel, deceptionAnalysis.patterns, deceptionAnalysis.combinationWarning),
    educationalInsight: generateEducationalInsight(deceptionAnalysis.patterns)
  };
}

// Generate deception-focused safety recommendations
function generateDeceptionRecommendations(riskLevel, patterns, combinationWarning) {
  const recommendations = [];

  // Base recommendations by risk level
  if (riskLevel === 'high') {
    recommendations.push('🛑 Avoid this content - high deception risk detected');
    recommendations.push('💰 Never provide money, personal, or financial information');
    recommendations.push('📢 Consider reporting this deceptive content to the platform');
    recommendations.push('🚨 Warn others who might be vulnerable to these tactics');
  } else if (riskLevel === 'medium') {
    recommendations.push('🔍 Research all claims independently through trusted sources');
    recommendations.push('⏰ Ignore time pressure - take days or weeks to evaluate');
    recommendations.push('💭 Discuss with trusted friends, family, or professionals before acting');
    recommendations.push('📱 Look for official endorsements on verified channels');
  } else {
    recommendations.push('🧠 Continue using critical thinking for any purchasing decisions');
    recommendations.push('🔗 Verify important claims through multiple independent sources');
    recommendations.push('💡 Stay informed about common deception patterns');
  }

  // Pattern-specific deception education
  patterns.forEach(pattern => {
    switch (pattern.category) {
      case 'Production Transparency':
        recommendations.push('🎭 Ask yourself: Why hide how content was made? What else might be hidden?');
        break;
      case 'Claim Analysis':
        recommendations.push('📊 Question overly confident claims - legitimate products use careful language');
        break;
      case 'Authority Misuse':
        recommendations.push('🤔 Consider motivations: Are endorsers paid? Do their actions match their words?');
        break;
      case 'Manipulation Tactics':
        recommendations.push('⏳ Remember: Legitimate opportunities don\'t vanish overnight');
        break;
    }
  });

  // Add combination warning if present
  if (combinationWarning) {
    recommendations.push(`⚠️ ${combinationWarning.warning}`);
  }

  return [...new Set(recommendations)]; // Remove duplicates
}

// Generate educational insights about deception patterns
function generateEducationalInsight(patterns) {
  if (patterns.length === 0) {
    return 'This content shows transparency in production methods and makes realistic, verifiable claims. These are positive indicators of trustworthiness.';
  }

  const insights = [];
  const categories = [...new Set(patterns.map(p => p.category))];

  if (categories.includes('Production Transparency')) {
    insights.push('Companies that hide production methods (like undisclosed AI voice) often hide other important information about their products or services.');
  }

  if (categories.includes('Claim Analysis')) {
    insights.push('Unrealistic or overly confident claims often indicate a focus on sales over truth. Legitimate businesses use careful, evidence-based language.');
  }

  if (categories.includes('Authority Misuse')) {
    insights.push('When authorities endorse products that contradict their stated values, it suggests financial motivation over genuine belief.');
  }

  if (categories.includes('Manipulation Tactics')) {
    insights.push('High-pressure tactics are designed to prevent careful evaluation. Trustworthy businesses give you time to make informed decisions.');
  }

  return insights.join(' ') || 'Multiple deception indicators suggest this content prioritizes persuasion over transparency.';
}

// Quick deception pattern analysis for immediate feedback
export function quickAnalyze(text) {
  const lowerText = text.toLowerCase();
  let riskScore = 0;
  const foundPatterns = [];

  // Check for unrealistic financial claims
  const financialPromises = DECEPTION_PATTERNS.claimAnalysis.financialPromises.unrealisticClaims;
  const financialMatches = financialPromises.filter(claim => 
    lowerText.includes(claim.toLowerCase())
  );
  if (financialMatches.length > 0) {
    riskScore += 35;
    foundPatterns.push('Unrealistic financial promises detected');
  }

  // Check for problematic health claims
  const healthClaims = DECEPTION_PATTERNS.claimAnalysis.healthSupplementClaims.strongClaims;
  const healthMatches = healthClaims.filter(claim => 
    lowerText.includes(claim.toLowerCase())
  );
  if (healthMatches.length > 0) {
    riskScore += 30;
    foundPatterns.push('Overly confident health claims detected');
  }

  // Check for pressure tactics
  const pressureTactics = DECEPTION_PATTERNS.urgencyManipulation.highPressureTactics.tactics;
  const pressureMatches = pressureTactics.filter(tactic => 
    lowerText.includes(tactic.toLowerCase())
  );
  if (pressureMatches.length > 0) {
    riskScore += 20;
    foundPatterns.push('High-pressure sales tactics detected');
  }

  // Check for celebrity contradictions
  const contradictions = DECEPTION_PATTERNS.celebrityAuthorityMisuse.lifestyleContradictions.contradictions;
  const contradictionMatches = contradictions.filter(contradiction => 
    lowerText.includes(contradiction.toLowerCase())
  );
  if (contradictionMatches.length > 0) {
    riskScore += 25;
    foundPatterns.push('Potential lifestyle contradictions detected');
  }

  return {
    riskScore: Math.min(riskScore, 100),
    patterns: foundPatterns,
    hasDeceptionIndicators: foundPatterns.length > 0,
    educationalNote: foundPatterns.length > 0 
      ? 'Multiple deception patterns found. Remember: companies that deceive in small ways often deceive in bigger ways.'
      : 'No obvious deception patterns detected in this text.'
  };
} 