var quotesArr = [
  "I let go of the past and let love heal every part of my life.",
  "The more I love myself, the more love I receive.",
  "I am getting better and better every day in every way.",
  "Every weakness is a chance to grow.",
  "I am perfect the way I am.",
  "I am worthy of love, abundance, and happiness.",
  "I am the expression of perfect freedom.",
  "I value the small and significant blessings in my life.",
  "I start elevating my life.",
  "Everything that is happening now is happening for my ultimate good.",
  "I accept that not everything is perfect yet, and I am grateful for all the blessings I have.",
  "My inner strength is invincible.",
  "I am pure consciousness.",
  "I am proud of myself for getting this far.",
  "My strength is greater than any struggle.",
  "Today I will be happy confident and successful.",
  "I respect who I am, even when my life isn't perfect.",
  "Smiling feels great!",
  "I attract happy and loving people by being happy and loving.",
  "I focus on positive progress, small or significant.",
  "I start the day with positive thoughts and feelings.",
  "New thoughts. New beginnings.",
  "I always find time for positive thoughts.",
  "Understanding myself gives me a new level of power.",
  "I am the creator of my life, every day.",
  "I am not dependent on anything or anyone. I am independent.",
  "I can love and be proud of myself even while I work on myself.",
  "Good things are coming to me.",
  "I start to recognize something to be grateful for every day.",
  "I am a magnet for happiness.",
  "I am at peace with the past because it made me who I am. I am great.",
  "my thoughts are unlimited, as is my life.",
  "I deserve to be confident in this body.",
  "I am a divine expression of life.",
  "My positive attitude is an inspiration for others.",
  "I am evolving to a happier me.",
  "The perfect time to start a fulfilling life is right here and now.",
  "I am not defined by my past, I am defined by the vision of my future.",
  "I chose to start my day with a positive feeling.",
  "I am happy to be who I truly am.",
  "I forgive myself for my mistakes and don't repeat them.",
  "First I change within, them my environment changes.",
  "I inhale positive energy and exhale fear.",
  "I love and appreciate myself.",
  "My opinion about myself matters. Others don't bother me.",
  "I am open to learn, develop and grow.",
  "I am living a happy life filled with reasons to be happy.",
  "I am the creative force in my world.",
  "I give myself permission to be happy.",
  "I open myself to life.",
  "Yes, I can do it - now!",
  "I know what is best for me.",
  "An attitude of gratitude is a magnet that attracts more of all that I desire.",
  "I let go of all reasons and excuses for not improving my life.",
  "My life is the life of God and I am now perfect.",
  "I am a magnet for good things.",
  "I am not afraid of my new life, because I control it.",
  "I think about something that makes me smile.",
  "I am proud of the person that I am.",
  "I treat myself with respect, then others will also treat me with respect.",
  "I am patient with myself and accept that changes happen when it is best for my development.",
  "I am proud of the new me that I am creating.",
  "I close my eyes. Then I breathe in confidence and breathe out all fear.",
  "I am what I am thinking.",
  "I choose happiness.",
  "I am doing the best I can and that is enough.",
  "Control your thoughts, control your life.",
  "Every start in a new day is impacting the rest of the day.",
  "This life is my time.",
  "I give myself space to grow because I understand that there is always room for growth.",
  "Good thoughts attract more good in my life.",
  "Unconditional love is true love.",
  "I look for reasons to be grateful every day.",
  "I am a strong independent person.",
  "I am allowed to say yes to myself.",
  "I forgive myself for my failures.",
  "I can handle everything.",
  "I fully love and accept myself the way I am.",
  "I keep my mind positive, always.",
  "My positive thoughts lift me up.",
  "I am aware of the good things in my life. I attract more of it.",
  "I am exactly where I should be on my journey.",
  "I am going to be okay.",
  "I recognize blessings regardless how big or small.",
  "I love and accept myself and trust the course of life.",
  "I radiate positive energy.",
  "I am proud that I am starting to change my life.",
  "I am capable of doing what I want.",
  "I deserve the same compassion I give to others.",
  "I try to find happiness in each moment and attract more of it.",
  "I smile. It doesn't hurt!",
  "Every thought has a profound impact on your day, on your entire life.",
  "I accept divine guidance.",
  "I see my current circumstances as an opportunity to grow.",
  "Positive thoughts feel better than negative ones. I focus on the positive side of life.",
  "I love my new life.",
  "Everything I experience in life, even challenges, are opportunities to evolve.",
  "My own happiness can help others to become happier.",
  "If I appreciate what I have today I will get more to appreciate tomorrow.",
  "I manifest my true desires.",

    
];




var twitterQuote = quotesArr[0];

function newQuote(){

var i = Math.floor(Math.random()*quotesArr.length);

document.getElementById("quotes").innerHTML = quotesArr[i];

document.getElementById("authors").innerHTML = authorArr[i];
  
twitterQuote = quotesArr[i];
  
}

function tweetQuote(){
  
  window.open("https://twitter.com/intent/tweet?text="+encodeURIComponent(twitterQuote));

}