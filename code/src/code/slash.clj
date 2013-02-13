(ns code.slash
  (:use [clojure.data.json :only (read-json)])
 )

(defn distance-sum [args]
  (reduce + 
    (map #(Float/valueOf %) 
      (map :Distance (get-in (read-json (slurp "txt/sushi.json")) [:query :results :Result]))))) 
