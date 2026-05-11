import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Trophy, ArrowLeft, 
  RotateCcw, Sparkles, 
  CheckCircle2,
  AlertCircle, Star,
  Calculator, Hash
} from 'lucide-react';
import { MATH_CHALLENGES } from './vocabData';

export default function MathGameView({ onBack }: { onBack: () => void }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const currentChallenge = MATH_CHALLENGES[currentIdx];
  const shuffledOptions = useMemo(() => {
    return [...currentChallenge.options].sort(() => Math.random() - 0.5);
  }, [currentChallenge]);

  const handleAnswer = (option: string) => {
    if (isCorrect !== null) return;
    
    setSelectedOption(option);
    const correct = option === currentChallenge.correctAnswer;
    setIsCorrect(correct);
    
    if (correct) {
      setScore(s => s + 1);
    }

    setTimeout(() => {
      setSelectedOption(null);
      if (currentIdx < MATH_CHALLENGES.length - 1) {
        setCurrentIdx(prev => prev + 1);
        setIsCorrect(null);
      } else {
        setShowResult(true);
      }
    }, correct ? 1000 : 2000);
  };

  const resetGame = () => {
    setCurrentIdx(0);
    setScore(0);
    setIsCorrect(null);
    setSelectedOption(null);
    setShowResult(false);
  };

  if (showResult) {
    return (
      <div className="max-w-2xl mx-auto py-20 px-4 text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white rounded-[40px] sm:rounded-[64px] p-8 sm:p-12 shadow-2xl border-4 border-slate-100 space-y-10 relative overflow-hidden text-center"
        >
          <Trophy className="w-16 h-16 sm:w-24 sm:h-24 text-yellow-500 mx-auto drop-shadow-xl" />
          
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-4xl font-black uppercase italic tracking-widest text-slate-900 leading-tight">ԽԱՂԻ ԱՎԱՐՏ</h2>
            <div className="text-6xl sm:text-8xl font-black text-blue-600 drop-shadow-xl">
              {score}/{MATH_CHALLENGES.length}
            </div>
            <p className="text-lg sm:text-xl font-bold text-slate-500 uppercase tracking-[0.3em]">
              {score === MATH_CHALLENGES.length ? 'ՄԱԹԵՄԱՏԻԿԱԿԱՆ ՀԱՆՃԱՐ!' : 'ԼԱՎ ՓՈՐՁ ԷՐ'}
            </p>
          </div>

          <div className="flex flex-col gap-4 pt-8">
            <button 
              onClick={resetGame}
              className="bg-blue-600 text-white py-6 rounded-3xl font-black italic uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-blue-500 transition-all shadow-xl"
            >
              <RotateCcw className="w-6 h-6" /> ՆՈՐԻՑ ՓՈՐՁԵԼ
            </button>
            <button onClick={onBack} className="text-slate-400 font-black uppercase text-[10px] tracking-widest hover:text-slate-900 transition-colors">
               ԳԼԽԱՎՈՐ ՄԵՆՅՈՒ
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 space-y-6 sm:space-y-8">
      {/* HUD */}
      <div className="flex justify-between items-center text-slate-400 font-black uppercase text-[10px] tracking-[0.4em]">
        <button onClick={onBack} className="flex items-center gap-2 hover:text-slate-900 transition-colors">
          <ArrowLeft className="w-4 h-4" /> ԵՏ
        </button>
        <div className="bg-white px-6 py-2 rounded-full text-slate-900 shadow-sm border border-slate-200 flex items-center gap-3">
          <Calculator className="w-4 h-4 text-blue-500" /> ՀԱՐՑ {currentIdx + 1} / {MATH_CHALLENGES.length}
        </div>
      </div>

      {/* Progress */}
      <div className="h-4 bg-slate-100 rounded-full overflow-hidden shadow-inner border border-slate-200">
        <motion.div 
          className="h-full bg-gradient-to-r from-blue-600 to-indigo-600"
          initial={{ width: 0 }}
          animate={{ width: `${((currentIdx + 1) / MATH_CHALLENGES.length) * 100}%` }}
        />
      </div>

      {/* Problem Card */}
      <motion.div
        key={currentIdx}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white rounded-[40px] sm:rounded-[64px] p-6 sm:p-20 shadow-2xl border-b-[12px] border-slate-100 text-center space-y-8 sm:space-y-12 relative overflow-hidden group mb-12"
      >
        {/* Feedback Layer */}
        <AnimatePresence>
          {isCorrect !== null && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`absolute inset-0 z-50 flex flex-col items-center justify-center text-white space-y-6 shadow-inner ${
                isCorrect ? 'bg-blue-600/95 backdrop-blur-md' : 'bg-slate-900/40 backdrop-blur-md pointer-events-none'
              }`}
            >
              {isCorrect ? (
                <>
                  <CheckCircle2 className="w-24 h-24" />
                  <h3 className="text-4xl sm:text-8xl font-black italic uppercase drop-shadow-2xl">ՃԻՇՏ Է!</h3>
                </>
              ) : (
                <motion.div 
                  initial={{ rotateX: 90 }}
                  animate={{ rotateX: 0 }}
                  className="bg-rose-600 p-8 sm:p-12 rounded-[40px] shadow-2xl border-4 border-rose-400 space-y-4 max-w-md mx-4"
                >
                  <div className="flex items-center justify-center gap-4">
                    <AlertCircle className="w-10 h-10 sm:w-12 sm:h-12" />
                    <h3 className="text-2xl sm:text-5xl font-black italic uppercase leading-none">ՍԽԱԼ Է</h3>
                  </div>
                  <div className="space-y-2 text-center">
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-80">ՃԻՇՏ ՊԱՏԱՍԽԱՆՆ Է`</p>
                    <p className="text-4xl sm:text-7xl font-black uppercase text-white drop-shadow-md">{currentChallenge.correctAnswer}</p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] bg-blue-100 text-blue-600 shadow-sm">
             <Hash className="w-4 h-4" /> ՄԱԹԵՄԱՏԻԿԱ
          </div>
          <h2 className="text-3xl sm:text-6xl font-black text-slate-900 italic uppercase tracking-tighter leading-tight mb-4 break-words">
             {currentChallenge.problem} <br className="hidden sm:block"/> <span className="text-blue-600">= ?</span>
          </h2>
          <div className="h-1 sm:h-2 w-32 sm:w-48 bg-blue-500/10 mx-auto rounded-full" />
          <p className="text-slate-400 font-black italic text-lg sm:text-2xl uppercase tracking-widest mt-6 leading-tight">
            {currentChallenge.translation}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-10">
          {shuffledOptions.map((opt, i) => {
             const isSelected = selectedOption === opt;
             const showsError = isCorrect === false && isSelected;

             return (
               <motion.button
                 key={i}
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 onClick={() => handleAnswer(opt)}
                 className={`p-6 sm:p-10 rounded-[32px] sm:rounded-[48px] text-xl sm:text-4xl font-black border-4 transition-all uppercase italic tracking-tighter ${
                   showsError 
                    ? 'bg-rose-600 text-white border-rose-400 shadow-[0_12px_0_0_#9f1239]' 
                    : 'bg-slate-50 text-slate-900 border-slate-200 shadow-[0_12px_0_0_#e2e8f0]'
                 } hover:shadow-[0_6px_0_0_#ced4da] hover:translate-y-[6px]`}
               >
                 {opt}
               </motion.button>
             );
          })}
        </div>
      </motion.div>

      <div className="text-center text-[10px] font-black text-slate-300 uppercase tracking-[0.6em] flex items-center justify-center gap-3">
         <Star className="w-4 h-4 text-blue-400" /> MATH MASTERY <Star className="w-4 h-4 text-blue-400" />
      </div>
    </div>
  );
}
