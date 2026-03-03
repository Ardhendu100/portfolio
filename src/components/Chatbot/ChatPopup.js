import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX, HiChat, HiPaperAirplane } from "react-icons/hi";
import { BsRobot } from "react-icons/bs";

const quickQuestions = [
  "Who is Ardhendu?",
  "What are Ardhendu's key skills?",
  "Why did Ardhendu build this chatbot?"
];

function ChatPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Ardhendu's AI assistant. Ask me anything about his work, skills, or experience!",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const API_URL = process.env.API_URL || "http://127.0.0.1:8000";

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const sendMessage = async (text) => {
    if (!text.trim() || isLoading) return;

    const userMessage = {
      id: Date.now(),
      text: text.trim(),
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    // Add a bot message placeholder for streaming
    const botMsgId = Date.now() + 1;
    setMessages((prev) => [
      ...prev,
      {
        id: botMsgId,
        text: "",
        sender: "bot",
        timestamp: new Date(),
      },
    ]);

    try {
      const response = await fetch(`${API_URL}/chat/stream`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: text.trim() }),
      });

      if (!response.ok || !response.body) throw new Error("Failed to get response");

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let botText = "";
      let done = false;
      
      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        
        if (value) {
          const chunk = decoder.decode(value, { stream: true });
          // Split the chunk into words and simulate typing effect
          const words = chunk.split(' ');
          for (let i = 0; i < words.length; i++) {
            botText += words[i] + (i < words.length - 1 ? ' ' : '');
            setMessages((prev) =>
              prev.map((msg) =>
                msg.id === botMsgId ? { ...msg, text: botText } : msg
              )
            );
            // Small delay to create typing effect (adjust speed here)
            // Move the delay to a separate function to avoid no-loop-func
            await delay(30);
          }
        }
      }

    // Helper function for delay outside the loop
    function delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
      // If nothing streamed, show fallback
      if (!botText.trim()) {
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === botMsgId
              ? { ...msg, text: "Sorry, I couldn't process that request." }
              : msg
          )
        );
      }
    } catch (error) {
      console.error("Chatbot error:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 2,
          text: "Sorry, I'm having trouble connecting right now. Please try again later.",
          sender: "bot",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(inputValue);
  };

  const handleQuickQuestion = (question) => {
    sendMessage(question);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-accent text-bg rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow"
        aria-label="Toggle chat">
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}>
              <HiX size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}>
              <HiChat size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-40 w-[90vw] max-w-md h-[600px] max-h-[80vh] bg-surface border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden">
            
            {/* Header */}
            <div className="bg-gradient-to-r from-accent/20 to-accent/10 border-b border-border px-5 py-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                <BsRobot size={20} className="text-bg" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-semibold text-sm">AI Assistant</h3>
                <div className="flex items-center gap-1">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-subtle text-xs">Online</span>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-bg/50">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 ${
                      msg.sender === "user"
                        ? "bg-accent text-bg rounded-br-sm"
                        : "bg-surface border border-border text-white rounded-bl-sm"
                    }`}>
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                    <span className={`text-[10px] mt-1 block ${msg.sender === "user" ? "text-bg/70" : "text-subtle"}`}>
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </motion.div>
              ))}

              {/* Loading Indicator */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start">
                  <div className="bg-surface border border-border rounded-2xl rounded-bl-sm px-4 py-3">
                    <div className="flex gap-1.5">
                      <motion.div
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                        className="w-2 h-2 bg-accent rounded-full"
                      />
                      <motion.div
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                        className="w-2 h-2 bg-accent rounded-full"
                      />
                      <motion.div
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                        className="w-2 h-2 bg-accent rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            {messages.length === 1 && !isLoading && (
              <div className="px-4 py-3 border-t border-border bg-surface/50">
                <p className="text-xs text-muted mb-2 font-medium">Quick questions:</p>
                <div className="flex flex-col gap-2">
                  {quickQuestions.map((q, i) => (
                    <motion.button
                      key={i}
                      whileHover={{ scale: 1.02, x: 2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleQuickQuestion(q)}
                      className="text-left text-xs text-subtle hover:text-accent bg-bg border border-border hover:border-accent rounded-lg px-3 py-2 transition-all duration-200">
                      {q}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-border bg-surface">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  disabled={isLoading}
                  className="flex-1 bg-bg border border-border rounded-lg px-4 py-2.5 text-white text-sm placeholder-muted outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all disabled:opacity-50"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={!inputValue.trim() || isLoading}
                  className="w-10 h-10 bg-accent text-bg rounded-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-all">
                  <HiPaperAirplane size={18} />
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ChatPopup;
