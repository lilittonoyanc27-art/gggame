import React from 'react';
import { motion } from 'motion/react';
import { 
  Calculator, ArrowLeft,
  Plus, Minus, X, Divide,
  Hash, GraduationCap
} from 'lucide-react';
import { MATH_VOCAB } from './vocabData';

export default function VocabView({ onBack, onPlay }: { onBack: () => void, onPlay: () => void }) {
  return (
    <div className="max-w-4xl mx-auto px-4 pb-32 pt-8 space-y-12">
      {/* Arithmetic Header */}
      <section className="text-center space-y-6 relative">
        <motion.div 
            initial={{ rotate: -10, scale: 0.8 }}
            animate={{ rotate: 10, scale: 1 }}
            transition={{ repeat: Infinity, duration: 4, repeatType: "reverse" }}
            className="inline-flex p-4 bg-blue-100 rounded-3xl shadow-xl text-blue-700 border-2 border-blue-200"
        >
           <Calculator className="w-12 h-12" />
        </motion.div>
        
        <div className="space-y-2">
            <h2 className="text-4xl sm:text-7xl font-black text-slate-900 uppercase italic tracking-tighter leading-none">
              ՄԱԹԵՄԱՏԻԿԱ
            </h2>
            <p className="text-blue-600 font-black italic uppercase tracking-[0.3em] text-[10px] sm:text-sm">
              ԹՎԵՐ ԵՎ ԳՈՐԾՈՂՈՒԹՅՈՒՆՆԵՐ
            </p>
        </div>
      </section>

      <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
        {/* Numbers Section */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-slate-50 rounded-[40px] sm:rounded-[48px] p-6 sm:p-10 border border-slate-200 shadow-2xl space-y-6 sm:space-y-8 relative overflow-hidden"
        >
          <div className="flex items-center gap-4 border-b border-slate-200 pb-4 sm:pb-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-xl sm:rounded-2xl flex items-center justify-center text-white font-black shadow-lg">
              <Hash className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 italic uppercase">ԹՎԵՐ (NÚMEROS)</h3>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {MATH_VOCAB.numbers.slice(0, 10).map((item, i) => (
              <div key={i} className="p-3 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between">
                <span className="text-blue-600 font-black">{item.n}</span>
                <span className="font-bold text-slate-700 italic">{item.w}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Operations Section */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-slate-900 rounded-[40px] sm:rounded-[48px] p-6 sm:p-10 border border-slate-800 shadow-2xl space-y-6 sm:space-y-8 relative overflow-hidden"
        >
          <div className="flex items-center gap-4 border-b border-slate-800 pb-4 sm:pb-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-500 rounded-xl sm:rounded-2xl flex items-center justify-center text-white font-black shadow-lg">
              <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white italic uppercase">ԳՈՐԾՈՂՈՒԹՅՈՒՆՆԵՐ</h3>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {MATH_VOCAB.operations.map((item, i) => (
              <div key={i} className="p-4 bg-slate-800 rounded-2xl border border-slate-700 flex items-center justify-between group hover:border-emerald-500/50 transition-all">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-slate-700 flex items-center justify-center text-emerald-400 font-black">{item.s}</span>
                  <span className="text-lg font-bold text-slate-100 italic">{item.w}</span>
                </div>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{item.am}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Info Box */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-blue-600 text-white rounded-[40px] sm:rounded-[48px] p-6 sm:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden border-b-[8px] sm:border-b-[12px] border-blue-700"
      >
        <p className="text-xl sm:text-4xl font-black italic uppercase leading-tight max-w-2xl mx-auto">
          ՍՈՎՈՐԻՐ <span className="text-yellow-300">ՀԱՇՎԵԼ</span> ԻՍՊԱՆԵՐԵՆՈՎ
        </p>
        <p className="text-blue-100 font-bold opacity-80 italic text-xs sm:text-lg">
          Լուծիր 20 մաթեմատիկական խնդիրներ` թվերը տառերով գրված:
        </p>
      </motion.div>

      {/* CTA section */}
      <section className="bg-slate-900 rounded-[40px] sm:rounded-[48px] p-6 sm:p-12 text-white text-center space-y-6 sm:space-y-8 shadow-2xl relative overflow-hidden border-t-4 border-blue-500/30">
        <div className="relative z-10 space-y-4">
          <h3 className="text-2xl sm:text-5xl font-black italic uppercase tracking-tighter leading-tight">ՊԱՏՐԱ՞ՍՏ ԵՍ ԽԱՂԻՆ</h3>
          <p className="text-slate-400 font-bold italic uppercase tracking-widest text-[9px] sm:text-xs">Ստուգիր քո մաթեմատիկական գիտելիքները իսպաներենով:</p>
        </div>
        <div className="relative z-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <button 
            onClick={onPlay}
            className="bg-blue-500 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-black italic uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl hover:bg-blue-400"
          >
            ՍԿՍԵԼ ԽԱՂԸ
          </button>
          <button 
            onClick={onBack}
            className="bg-slate-800 text-white border border-slate-700 px-8 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-black italic uppercase tracking-widest hover:bg-slate-700 transition-all flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" /> ՀԵՏ
          </button>
        </div>
      </section>
    </div>
  );
}
