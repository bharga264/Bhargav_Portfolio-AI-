import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Send, X, User, Bot, Sparkles, RefreshCcw, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
  model?: string;
}

type ModelType = 'groq-llama-70b' | 'openai-gpt-oss-20b' | 'llama-3.1-8b-instant';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi! I'm Bhargav's AI assistant. I can help you learn about his experience, projects, skills, and expertise. What would you like to know?",
      isUser: false,
      timestamp: new Date(),
      model: 'groq-llama-70b'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [selectedModel, setSelectedModel] = useState<ModelType>('groq-llama-70b');
  const [currentDateTime, setCurrentDateTime] = useState('2025-08-31 13:59:32');
  const [currentUser, setCurrentUser] = useState('Bhargav9814');
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  // Comprehensive portfolio data as JSON
  const portfolioData = {
    "profile": {
      "name": "Bhargav Prasad Kalichetti",
      "email": "bhargavprasad9814@gmail.com",
      "linkedin": "https://www.linkedin.com/in/bhargav-prasad-kalichetti-183552257",
      "location": "Frisco, Texas, USA",
      "title": "AI Engineer with 5+ years experience",
      "summary": "Experienced AI Engineer specializing in Generative AI, LLM fine-tuning, RAG/Graph RAG, and multi-agent systems, with strong programming expertise in Python, C, and C++."
    },
    "education": {
      "masters": {
        "degree": "Master's in Artificial Intelligence",
        "university": "University of North Texas",
        "location": "Texas, USA",
        "gpa": "3.65/4.0",
        "graduation": "December 2024"
      },
      "bachelors": {
        "degree": "B.Tech in Electronics and Communication Engineering",
        "university": "Annamacharya Institute of Technology and Science",
        "location": "Andhra Pradesh, India"
      }
    },
    "experience": [
      {
        "company": "Cisco Systems | Vzure Solutions",
        "role": "AI Developer",
        "period": "Aug 2024 – Present",
        "location": "Texas, USA",
        "achievements": [
          "Built Python-based no-code/low-code chatbot platform using Django REST + React",
          "Designed multi-agent systems with LangGraph, CrewAI, AutoGen, and LangChain",
          "Implemented Agent-to-Agent (A2A) communication protocol for seamless coordination",
          "Integrated persistent memory using Mem0, pgvector, and ChromaDB",
          "Fine-tuned Llama-3B with LoRA and QLoRA achieving 35% higher accuracy and 50% lower latency",
          "Built Azure optimization pipeline with ONNX, TensorRT resulting in 3× faster inference",
          "Implemented GPU-aware autoscaling in AKS reducing provisioning costs"
        ],
        "technologies": ["Python", "Django", "React", "LangChain", "CrewAI", "LangGraph", "AutoGen", "Mem0", "ChromaDB", "LLaMA", "ONNX", "TensorRT", "Azure AKS"]
      },
      {
        "company": "University of North Texas",
        "role": "Research & Instructional Assistant",
        "period": "Mar 2023 – Aug 2024",
        "location": "Texas, USA",
        "achievements": [
          "Developed cybersecurity knowledge graph training custom Llama 3 models",
          "Built Graph RAG system with LangChain and Neo4j achieving 40% improvement",
          "Conducted comparative research on transformer architectures using PyTorch and TensorFlow",
          "Deployed Graph RAG system on Azure Kubernetes Service with CI/CD pipelines"
        ],
        "technologies": ["LLaMA 3", "Neo4j", "LangChain", "PyTorch", "TensorFlow", "Azure AKS", "Docker"]
      },
      {
        "company": "Wipro",
        "role": "Data and Network Analyst",
        "period": "Feb 2022 – Dec 2022",
        "location": "Remote, India",
        "achievements": [
          "Designed AI-assisted risk assessment framework delivering 40% reduction in vulnerabilities",
          "Built ML threat detection pipelines on AWS SageMaker achieving 25% improvement",
          "Integrated ML insights with SIEM systems improving response times by 30%"
        ],
        "technologies": ["AWS SageMaker", "Random Cut Forest", "XGBoost", "Splunk", "ELK", "Python"]
      },
      {
        "company": "Amara Raja Power Systems",
        "role": "Research and Development Engineer",
        "period": "Aug 2020 – Dec 2021",
        "location": "Tirupati, India",
        "achievements": [
          "Developed ARM and STM32 firmware using Embedded C/C++ increasing battery life by 20%",
          "Implemented predictive battery analysis using ML models (Random Forests, LSTM, SVM)",
          "Built cloud-based IoT monitoring system on AWS IoT Core and Azure IoT Hub",
          "Applied time-series ML models for battery failure prediction"
        ],
        "technologies": ["ARM", "STM32", "Embedded C/C++", "Python", "LSTM", "AWS IoT", "Azure IoT"]
      }
    ],
    "skills": {
      "programming": ["Python", "C/C++", "SQL", "Embedded C", "TypeScript", "ReactJS"],
      "ai_ml": ["PyTorch", "TensorFlow", "Keras", "Scikit-learn", "Hugging Face", "LangChain", "CrewAI", "LangGraph", "AutoGen"],
      "databases": ["PostgreSQL", "pgvector", "MongoDB", "ChromaDB", "Neo4j", "Vector Databases"],
      "cloud": ["AWS SageMaker", "Azure AKS", "Docker", "Kubernetes", "CI/CD", "Azure Functions"],
      "mlops": ["ONNX", "TensorRT", "QLoRA/LoRA", "RAG", "Graph RAG", "GPU Optimization"]
    },
    "projects": [
      {
        "name": "Advanced Multimodal Image Captioning System",
        "description": "Production-scale system using SWIN Transformer and GPT-3",
        "achievements": ["89% BLEU score improvement", "100K+ images training dataset"],
        "technologies": ["SWIN Transformer", "GPT-3", "PyTorch", "Computer Vision"]
      },
      {
        "name": "Phone Recommendation System",
        "description": "Flask-based collaborative and content filtering system",
        "achievements": ["Personalized recommendations", "ML-driven user preference analysis"],
        "technologies": ["Flask", "Scikit-learn", "Machine Learning", "Recommendation Systems"]
      }
    ],
    "certifications": [
      "Java 17 Master Class - Udemy",
      "Machine Learning: NLP in Python - Udemy",
      "Deep Learning with TensorFlow - IBM",
      "Deep Learning with Multimodal RAG - Intel",
      "Generative AI & MLOps - OpenAI & Hugging Face"
    ]
  };

  // Define model configurations
  const modelConfigs = {
    'groq-llama-70b': {
      apiUrl: 'https://api.groq.com/openai/v1/chat/completions',
      apiKey: import.meta.env.VITE_GROQ_API_KEY,
      model: 'llama-3.1-70b-versatile',
      temperature: 0.7,
      max_tokens: 1000,
      displayName: 'LLaMA 3.1 (70B)'
    },
    'openai-gpt-oss-20b': {
      apiUrl: 'https://api.groq.com/openai/v1/chat/completions',
      apiKey: import.meta.env.VITE_GROQ_API_KEY,
      model: 'gpt-oss-20b',
      temperature: 0.8,
      max_tokens: 1200,
      displayName: 'GPT-OSS-20B'
    },
    'llama-3.1-8b-instant': {
      apiUrl: 'https://api.groq.com/openai/v1/chat/completions',
      apiKey: import.meta.env.VITE_GROQ_API_KEY,
      model: 'llama-3.1-8b-instant',
      temperature: 0.7,
      max_tokens: 800,
      displayName: 'LLaMA 3.1 (8B)'
    }
  };

  // Update current date/time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const year = now.getUTCFullYear();
      const month = String(now.getUTCMonth() + 1).padStart(2, '0');
      const day = String(now.getUTCDate()).padStart(2, '0');
      const hours = String(now.getUTCHours()).padStart(2, '0');
      const minutes = String(now.getUTCMinutes()).padStart(2, '0');
      const seconds = String(now.getUTCSeconds()).padStart(2, '0');
      
      setCurrentDateTime(`${year}-${month}-${day} ${hours}:${minutes}:${seconds}`);
    }, 60000); // Update every minute
    
    return () => clearInterval(timer);
  }, []);

  const generateAIResponse = async (userMessage: string, modelType: ModelType): Promise<string> => {
    const config = modelConfigs[modelType];
    
    const systemPrompt = `You are Bhargav Prasad Kalichetti's AI assistant. Use the following comprehensive portfolio data to answer questions about Bhargav professionally and accurately.

PORTFOLIO DATA:
${JSON.stringify(portfolioData, null, 2)}

CURRENT INFO:
Current date and time: ${currentDateTime} (UTC)
Current user: ${currentUser}

INSTRUCTIONS:
- Answer questions based ONLY on the provided portfolio data
- Be conversational, professional, and helpful
- Use bullet points and emojis for better readability when appropriate
- If asked about something not in the data, politely redirect to what you do know
- Always be accurate and don't make up information
- Format responses nicely with sections when relevant
- Keep responses concise but informative
- You are powered by ${config.displayName} on ChatGroq`;

    try {
      const response = await fetch(config.apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${config.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: config.model,
          messages: [
            {
              role: 'system',
              content: systemPrompt
            },
            {
              role: 'user',
              content: userMessage
            }
          ],
          temperature: config.temperature,
          max_tokens: config.max_tokens,
          top_p: 1,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.choices[0].message.content;
    } catch (error) {
      console.error('AI API error:', error);
      return `I'm having trouble connecting to my AI backend (${config.displayName}) right now. Please try asking about Bhargav's experience, skills, projects, or education, and I'll do my best to help!`;
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputValue;
    const currentModel = selectedModel;
    setInputValue('');
    setIsTyping(true);

    try {
      const response = await generateAIResponse(currentInput, currentModel);
      
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        isUser: false,
        timestamp: new Date(),
        model: currentModel
      };
      
      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "Sorry, I encountered an error. Please try asking about Bhargav's experience, projects, or skills!",
        isUser: false,
        timestamp: new Date(),
        model: currentModel
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const clearChat = () => {
    setMessages([{
      id: '1',
      content: `Hi! I'm Bhargav's AI assistant  ${modelConfigs[selectedModel].displayName}. I can help you learn about his experience, projects, skills, and expertise. What would you like to know?`,
      isUser: false,
      timestamp: new Date(),
      model: selectedModel
    }]);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [messages]);

  // Effect for model change
  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    if (!lastMessage.isUser && lastMessage.model !== selectedModel) {
      setMessages(prev => {
        const newMessages = [...prev];
        newMessages[0] = {
          ...newMessages[0],
          content: `Hi! I'm Bhargav's AI assistant powered by ${modelConfigs[selectedModel].displayName} on ChatGroq. I can help you learn about his experience, projects, skills, and expertise. What would you like to know?`,
          model: selectedModel
        };
        return newMessages;
      });
    }
  }, [selectedModel]);

  const getModelBadge = (modelType?: ModelType) => {
    if (!modelType) return null;
    
    const badgeColors = {
      'groq-llama-70b': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300',
      'openai-gpt-oss-20b': 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300',
      'llama-3.1-8b-instant': 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300'
    };
    
    return (
      <span className={`text-xs px-1.5 py-0.5 rounded ${badgeColors[modelType]}`}>
        {modelConfigs[modelType].displayName}
      </span>
    );
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2 }}
      >
        <Button
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full shadow-glow bg-primary hover:bg-primary/90"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-6 w-96 h-[500px] z-50"
          >
            <div className="glass-card h-full flex flex-col rounded-lg shadow-xl border border-border/30">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-border/50">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <Sparkles className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Bhargav's AI Assistant</h3>
                    <p className="text-xs text-muted-foreground">Powered by ChatGroq</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={clearChat}
                          className="h-8 w-8"
                        >
                          <RefreshCcw className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Clear conversation</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="h-8 w-8"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Status Bar */}
              <div className="bg-muted/30 px-4 py-2 border-b border-border/50">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-muted-foreground">Model:</span>
                    <Select
                      value={selectedModel}
                      onValueChange={(value: ModelType) => setSelectedModel(value)}
                    >
                      <SelectTrigger className="h-7 text-xs w-[150px]">
                        <SelectValue placeholder="Select a model" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="llama-3.1-8b-instant" className="text-xs">LLaMA 3.1 (8B)</SelectItem>
                        <SelectItem value="groq-llama-70b" className="text-xs">LLaMA 3.1 (70B)</SelectItem>
                        <SelectItem value="openai-gpt-oss-20b" className="text-xs">GPT-OSS-20B</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{currentDateTime}</span>
                  </div>
                </div>
                <div className="mt-1.5 flex items-center text-xs text-muted-foreground">
                  <User className="h-3 w-3 mr-1" />
                  <span>{currentUser}</span>
                </div>
              </div>

              {/* Messages */}
              <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
                <div className="space-y-4">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex items-start space-x-2 max-w-[80%] ${message.isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${message.isUser ? 'bg-primary' : 'bg-muted'}`}>
                          {message.isUser ? (
                            <User className="h-3 w-3 text-primary-foreground" />
                          ) : (
                            <Bot className="h-3 w-3 text-muted-foreground" />
                          )}
                        </div>
                        <div className={`rounded-2xl px-3 py-2 ${message.isUser ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                          <pre className="text-sm whitespace-pre-wrap font-sans">{message.content}</pre>
                          {!message.isUser && message.model && (
                            <div className="mt-1.5 flex justify-end">
                              {getModelBadge(message.model as ModelType)}
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="flex items-start space-x-2">
                        <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
                          <Bot className="h-3 w-3 text-muted-foreground" />
                        </div>
                        <div className="bg-muted rounded-2xl px-3 py-2">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-pulse"></div>
                            <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-pulse" style={{animationDelay: '0.1s'}}></div>
                            <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </ScrollArea>

              {/* Input */}
              <div className="p-4 border-t border-border/50">
                <div className="flex space-x-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask about Bhargav's experience..."
                    className="flex-1"
                    disabled={isTyping}
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim() || isTyping}
                    size="sm"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;