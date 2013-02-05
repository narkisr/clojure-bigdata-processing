(ns code.core-test
  (:require [clojure.java.io :as io]
            [clojure-hadoop.imports :as imp])
  (:use [code.core :only (tool-run)] clojure.test))

(imp/import-mapreduce)
(imp/import-mapreduce-lib)

(deftest word-count
  (let [input "txt/tom-sawyer.txt" output "result"]
    (io/delete-file output true)
    (is (tool-run (clojure_hadoop.job.) ["-i" input "-o" output ]))))
