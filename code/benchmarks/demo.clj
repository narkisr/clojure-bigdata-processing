(ns demo
  (:use perforate.core
        code.core 
        ))

(defgoal tokenization "Testing tokenization speed")

(defcase tokenization :small
  [] (tokenize "I love food!"))

