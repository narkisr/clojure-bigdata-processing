(ns code.core-test
  (:require [clojure.java.io :as io]
            [clojure-hadoop.imports :as imp])
  (:use 
    [fs.core :only (delete-dir)]
    [clojure.string :only (split-lines)] 
    [code.core :only (tool-run)] clojure.test))

(imp/import-mapreduce)
(imp/import-mapreduce-lib)

(deftest word-count
  (let [input "txt/tom-sawyer.txt" output "result"]
    (delete-dir output)
    (is (tool-run (clojure_hadoop.job.) ["-i" input "-o" output ]))
    (take 4 (split-lines (slurp (str output "/part-r-00000")))) 
    ))



